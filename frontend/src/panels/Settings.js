import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import bridge from "@vkontakte/vk-bridge";

import {
  Avatar,
  Chip,
  Panel,
  PanelHeader,
  Div,
  FormLayout,
  FormItem,
  FormStatus,
  Select,
  CustomSelectOption,
  Button,
} from "@vkontakte/vkui";
import { ChipsSelect } from "@vkontakte/vkui/dist/unstable";

import axios from "axios";

const Settings = ({ id, fetchedUser, go }) => {
  const [selectedViewUsers, setViewUsers] = useState([]);
  const [selectedSendUsers, setSendUsers] = useState([]);
  const [friends, setFriends] = useState([]);
  const [error, setError] = useState(false);
  const [privacy, setPrivacy] = useState({ send: "0", view: "0" });

  const onChangeViewPrivacy = (e) => {
    const { value } = e.currentTarget;
    setPrivacy({ send: privacy.send, view: value });
  };

  const onChangeSendPrivacy = (e) => {
    const { value } = e.currentTarget;
    setPrivacy({ send: value, view: privacy.view });
  };

  const viewUsersChipsProps = {
    value: selectedViewUsers,
    onChange: setViewUsers,
    options: friends,
    placeholder: "Не выбраны",
    emptyText: "Совсем ничего не найдено",
  };

  const sendUsersChipsProps = {
    value: selectedSendUsers,
    onChange: setSendUsers,
    options: friends,
    placeholder: "Не выбраны",
    emptyText: "Совсем ничего не найдено",
  };

  const onClickSubmit = (e) => {
    if (
      (selectedViewUsers.length == 0 && privacy.view == 2) ||
      (selectedSendUsers.length == 0 && privacy.send == 2)
    ) {
      setError(true);
      return;
    }

    let send = [],
      view = [];

    switch (privacy.send) {
      case "0": {
        send = [0];
        break;
      }
      case "1": {
        send = [1];
        break;
      }
      case "2": {
        send = selectedSendUsers.map((user) => user.value);
        break;
      }
      default: {
        send = [-1];
        break;
      }
    }

    switch (privacy.view) {
      case "0": {
        view = [0];
        break;
      }
      case "1": {
        view = [1];
        break;
      }
      case "2": {
        view = selectedViewUsers.map((user) => user.value);
        break;
      }
      default: {
        view = [-1];
        break;
      }
    }
    axios.put(`https://vk-final-vk-mini-apps.herokuapp.com/v1/user/${fetchedUser.id}/`, {
      write_permission: send,
      read_permission: view,
    });
    go(e);
  };

  useEffect(async () => {
    const friends_ = await bridge
      .send("VKWebAppCallAPIMethod", {
        method: "friends.get",
        request_id: "32test",
        params: {
          user_id: fetchedUser.id,
          fields: "photo_200_orig",
          v: 5.131,
          access_token: process.env.REACT_APP_ACCESS_TOKEN,
        },
      })
      .then(({ response }) =>
        response.items.map((user) => ({
          value: user.id,
          label: `${user.first_name} ${user.last_name}`,
          src: user.photo_200_orig,
        }))
      );

    const users = await axios
      .get(`https://vk-final-vk-mini-apps.herokuapp.com/v1/user`)
      .then(({ data }) => data);

    if (users.some((user) => user.id == fetchedUser.id)) {
      await axios
        .get(`https://vk-final-vk-mini-apps.herokuapp.com/v1/user/${fetchedUser.id}`)
        .then(({ data }) => {
          const { read_permission, write_permission } = data;
          let view, send;

          if (read_permission[0] == 0) view = "0";
          if (write_permission[0] == 0) send = "0";

          if (read_permission[0] == 1) view = "1";
          if (write_permission[0] == 1) send = "1";

          if (read_permission[0] == -1) view = "3";
          if (write_permission[0] == -1) send = "3";

          if (write_permission[0] > 2) {
            send = "2";
            setSendUsers(
              friends_.filter((friend) =>
                write_permission.includes(friend.value)
              )
            );
          }
          if (read_permission[0] > 2) {
            view = "2";
            setViewUsers(
              friends_.filter((friend) =>
                read_permission.includes(friend.value)
              )
            );
          }
          setPrivacy({ send: send, view: view });
        });
    }

    setFriends(friends_);
  }, []);

  return (
    <Panel id={id}>
      <PanelHeader>Настройки альбома</PanelHeader>
      <FormLayout>
        {error && (
          <Div>
            <FormStatus header="Пустой список" mode="error">
              Укажите каким друзьям вы предоставляете доступ
            </FormStatus>
          </Div>
        )}
        <FormItem top="Кто может смотреть мои автографы:">
          <Select
            value={privacy.view}
            onChange={onChangeViewPrivacy}
            placeholder="Выберите уровень приватности"
            options={[
              {
                value: "0",
                label: "Все",
              },
              {
                value: "1",
                label: "Друзья",
              },
              {
                value: "2",
                label: "Некоторые друзья",
              },
              {
                value: "3",
                label: "Никто",
              },
            ]}
          />
        </FormItem>
        {privacy.view == "2" && (
          <FormItem top="Выберите пользователей">
            <ChipsSelect
              {...viewUsersChipsProps}
              showSelected={false}
              closeAfterSelect={false}
              onChangeStart={(e, option) => {
                if (option.value === "download") {
                  e.preventDefault();
                  alert("download!");
                }
              }}
              renderChip={({
                value,
                label,
                option: { src, icon },
                ...rest
              }) => (
                <Chip
                  value={value}
                  before={<Avatar size={20} src={src} />}
                  {...rest}
                >
                  {label}
                </Chip>
              )}
              renderOption={({
                option: { src, value, icon },
                ...otherProps
              }) => {
                return (
                  <CustomSelectOption
                    before={
                      icon ? (
                        <Avatar size={20}>{icon}</Avatar>
                      ) : (
                        <Avatar size={20} src={src} />
                      )
                    }
                    {...otherProps}
                  />
                );
              }}
            />
          </FormItem>
        )}
        <FormItem top="Кто может оставлять мне автографы:">
          <Select
            value={privacy.send}
            onChange={onChangeSendPrivacy}
            placeholder="Выберите уровень приватности"
            options={[
              {
                value: "0",
                label: "Все",
              },
              {
                value: "1",
                label: "Друзья",
              },
              {
                value: "2",
                label: "Некоторые друзья",
              },
              {
                value: "3",
                label: "Никто",
              },
            ]}
          />
        </FormItem>
        {privacy.send == "2" && (
          <FormItem top="Выберите пользователей">
            <ChipsSelect
              {...sendUsersChipsProps}
              showSelected={false}
              closeAfterSelect={false}
              onChangeStart={(e, option) => {
                if (option.value === "download") {
                  e.preventDefault();
                  alert("download!");
                }
              }}
              renderChip={({
                value,
                label,
                option: { src, icon },
                ...rest
              }) => (
                <Chip
                  value={value}
                  before={<Avatar size={20} src={src} />}
                  {...rest}
                >
                  {label}
                </Chip>
              )}
              renderOption={({
                option: { src, value, icon },
                ...otherProps
              }) => {
                return (
                  <CustomSelectOption
                    before={
                      icon ? (
                        <Avatar size={20}>{icon}</Avatar>
                      ) : (
                        <Avatar size={20} src={src} />
                      )
                    }
                    {...otherProps}
                  />
                );
              }}
            />
          </FormItem>
        )}
      </FormLayout>
      <Div>
        <Button
          size="l"
          appearance="overlay"
          stretched
          onClick={onClickSubmit}
          data-to="home"
        >
          Сохранить
        </Button>
      </Div>
    </Panel>
  );
};

Settings.propTypes = {
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
};

export default Settings;
