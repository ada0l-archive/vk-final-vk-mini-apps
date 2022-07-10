import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import bridge from "@vkontakte/vk-bridge";

import {
  Panel,
  PanelHeader,
  Cell,
  Card,
  Group,
  Div,
  Text,
  SubnavigationBar,
  SubnavigationButton,
  Spinner,
  Avatar,
  Title,
} from "@vkontakte/vkui";
import {
  Icon56Stars3Outline,
  Icon28SettingsOutline,
  Icon28BrushOutline,
  Icon56CancelCircleOutline,
} from "@vkontakte/icons";
import axios from "axios";
import moment from "moment";

moment.locale("ru");

const Home = ({ id, fetchedUser, owner, go }) => {
  const [isLoaded, setLoaded] = useState(false);
  const [signs, setSigns] = useState([]);
  const [userPerms, setUserPerms] = useState({ read: 0, write: 0 });

  const isMyAlbum = () => {
    return fetchedUser?.id == owner?.id;
  };

  const isFriends = async () => {
    const friends = await bridge
      .send("VKWebAppCallAPIMethod", {
        method: "friends.get",
        request_id: "32test",
        params: {
          user_id: fetchedUser.id,
          v: 5.131,
          access_token: process.env.REACT_APP_ACCESS_TOKEN,
        },
      })
      .then(({ response }) => response.items);
    return friends.some((friend) => friend == owner.id);
  };

  const checkPerms = async (read_permission, write_permission) => {
    if (owner.id == fetchedUser.id) {
      setUserPerms({ read: 1, write: 0 });
      return;
    }
    let read, write;
    if (read_permission[0] > 2) {
      const res = read_permission.some((friend) => friend == fetchedUser.id);
      read = res;
    } else {
      switch (read_permission[0]) {
        case 0: {
          read = 1;
          break;
        }
        case 1: {
          read = await isFriends();
          break;
        }
        default: {
          read = 0;
          break;
        }
      }
    }

    if (read_permission[0] > 2) {
      const res = write_permission.some((friend) => friend == fetchedUser.id);
      write = res;
    } else {
      switch (write_permission[0]) {
        case 0: {
          write = 1;
          break;
        }
        case 1: {
          write = await isFriends();
          break;
        }
        default: {
          write = 0;
          break;
        }
      }
    }

    setUserPerms({ read: read, write: write });
  };

  const getUserInfo = async (userIDs) => {
    return bridge
      .send("VKWebAppCallAPIMethod", {
        method: "users.get",
        request_id: "32test",
        params: {
          user_ids: userIDs?.join(","),
          fields: "photo_200_orig",
          v: 5.131,
          access_token: process.env.REACT_APP_ACCESS_TOKEN,
        },
      })
      .then(({ response }) => response);
  };

  useEffect(async () => {
    if (!owner) return;

    const users = await axios
      .get(`https://vk-final-vk-mini-apps.herokuapp.com/v1/user`)
      .then(({ data }) => data);

    setUserPerms({ write: 1, read: 1 });
    if (users.some((user) => user.id == owner.id)) {
      const { read_permission, write_permission } = await axios
        .get(`https://vk-final-vk-mini-apps.herokuapp.com/v1/user/${owner.id}`)
        .then(({ data }) => data);

      checkPerms(read_permission, write_permission);
    }

    let signs = await axios
      .get("https://vk-final-vk-mini-apps.herokuapp.com/v1/photo", {
        params: {
          user_to_id: owner.id,
        },
      })
      .then(({ data }) => {
        return data;
      });

    const authors = await getUserInfo(signs?.map((sign) => sign.user_id));
    signs = signs?.map((sign) => {
      const user = authors.find((author) => author.id == sign.user_id);
      return {
        author_avatar: user?.photo_200_orig,
        author: `${user?.first_name} ${user?.last_name}`,
        author_id: user?.id,
        date: moment(sign?.time_created).format("DD MMMM YYYY в HH:mm"),
        text: sign?.text ?? null,
        src:
          sign?.uuid_str != "None"
            ? `https://vk-mini-apps.hb.bizmrg.com/${sign?.uuid_str}.png`
            : null,
      };
    });
    setSigns(signs);
    setLoaded(true);
  }, [owner]);

  return (
    <Panel id={id}>
      <PanelHeader>
        {isMyAlbum() ? "Мои автографы" : `Автографы ${owner?.name}`}
      </PanelHeader>
      {isLoaded ? (
        <React.Fragment>
          <SubnavigationBar mode="fixed">
            {isMyAlbum() ? (
              <SubnavigationButton
                onClick={(e) => go(e)}
                before={<Icon28SettingsOutline />}
                data-to="settings"
              >
                Настройки
              </SubnavigationButton>
            ) : userPerms.write ? (
              <SubnavigationButton
                onClick={(e) => go(e)}
                before={<Icon28BrushOutline />}
                data-to="create_sign"
              >
                Оставить автограф
              </SubnavigationButton>
            ) : (
              <></>
            )}
          </SubnavigationBar>
          {!userPerms.read ? (
            <Div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 80,
              }}
            >
              <Icon56CancelCircleOutline color="red" width={96} height={96} />
              <Title> Доступ ограничен </Title>
            </Div>
          ) : signs?.length > 0 ? (
            signs.map((sign, index) => (
              <Group key={index}>
                <Cell
                  before={<Avatar size={40} src={sign.author_avatar} />}
                  disabled
                  description={sign.date}
                  //   onClick={redirect(sign.author_id)}
                >
                  {sign.author}
                </Cell>
                <Div>
                  {sign.src ? (
                    <Card
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img width={200} src={sign.src} />
                    </Card>
                  ) : (
                    <Text weight="semibold" style={{ textAlign: "center" }}>
                      {sign.text}
                    </Text>
                  )}
                </Div>
              </Group>
            ))
          ) : (
            <Div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 80,
              }}
            >
              <Icon56Stars3Outline width={96} height={96} />
              <Title> Здесь еще нет автографов </Title>
            </Div>
          )}
        </React.Fragment>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Spinner size="large" style={{ margin: "20px 0" }} />
        </div>
      )}
    </Panel>
  );
};

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
  owner: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default Home;
