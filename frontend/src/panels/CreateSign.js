import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
  Panel,
  PanelHeader,
  Button,
  Div,
  Select,
  FormItem,
  FormLayout,
  FormStatus,
  Input,
} from "@vkontakte/vkui";
import { Icon24Write, Icon24PenOutline } from "@vkontakte/icons";

import { Paintable } from "paintablejs/react";
import styles from "../assets/app.module.css";
import axios from "axios";

const CreateSign = ({ id, fetchedUser, owner, go }) => {
  const [error, setError] = useState(false);
  const [signType, setSignType] = useState(0);

  const [useEraser, setUseEraser] = useState(false);
  const [active, setActive] = useState(true);
  const [pencilConfig, setPencilConfig] = useState({
    thickness: 5,
    color: "#000000",
  });

  const [sign, setSign] = useState(null);

  const onChangeColor = (e) => {
    setPencilConfig({
      thickness: pencilConfig.thickness,
      color: e.target.value,
    });
  };

  const onChangeSignType = (e) => {
    const { value } = e.currentTarget;
    setSignType(value);
    setSign(null);
  };

  const onClickSubmit = async (e) => {
    if (sign == null) {
      setError(true);
      return;
    }
    const formData = new FormData();
    formData.append("user_id", fetchedUser.id);
    formData.append("user_to_id", owner.id);
    formData.append(signType == 0 ? "text" : "file", sign);

    await axios.post("https://vk-final-vk-mini-apps.herokuapp.com/v1/photo/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    e.currentTarget = {
      dataset: {
        to: "home",
      },
    };
    go(e);
  };

  const setFile = (e) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setSign(reader.result.split(',')[1]);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const setGraffity = () => {
    setActive(false);
  };

  return (
    <Panel id={id}>
      <PanelHeader style={{ zIndex: 10000 }}>Создать автограф</PanelHeader>
      <FormLayout>
        {error && (
          <Div>
            <FormStatus header="Пустая бумажечка" mode="error">
              Вы не создали автограф
            </FormStatus>
          </Div>
        )}
        <FormItem top="Тип автографа">
          <Select
            value={signType}
            onChange={onChangeSignType}
            placeholder="Выберите тип автографа"
            options={[
              {
                value: 0,
                label: "Текст",
              },
              {
                value: 1,
                label: "Картинка",
              },
              {
                value: 2,
                label: "Граффити",
              },
            ]}
          />
        </FormItem>
      </FormLayout>
      {signType == 0 ? (
        <Div>
          <Input
            type={"text"}
            onChange={(e) => {
              setSign(e.target.value);
            }}
          />
        </Div>
      ) : signType == 1 ? (
        <Div>
          <Input type={"file"} accept={"image/*"} onChange={setFile} />
        </Div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paintable
            width={400}
            height={400}
            active={active}
            color={pencilConfig.color}
            thickness={pencilConfig.thickness}
            useEraser={useEraser}
            onSave={(image) => setSign(image.split(',')[1])}
            onLongPress={() => console.log("long")}
          >
            <div className={styles["canvas-inner"]}>
              <div
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  display: "flex",
                  gap: 8,
                  zIndex: 9999,
                }}
              >
                <Button
                  size="l"
                  appearance="neutral"
                  before={useEraser ? <Icon24PenOutline /> : <Icon24Write />}
                  stretched
                  onClick={() => setUseEraser(!useEraser)}
                />

                <input
                  type={"color"}
                  className={styles["colorPicker"]}
                  value={pencilConfig.color}
                  onChange={onChangeColor}
                />
              </div>
            </div>
          </Paintable>
        </div>
      )}
      <Div>
        {signType == 2 && active ? (
          <Button
            size="l"
            appearance="overlay"
            stretched
            onClick={setGraffity}
            data-to="home"
          >
            Сохранить
          </Button>
        ) : (
          <Button
            size="l"
            appearance="overlay"
            stretched
            onClick={onClickSubmit}
            data-to="home"
          >
            Отправить
          </Button>
        )}
      </Div>
    </Panel>
  );
};

CreateSign.propTypes = {
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

export default CreateSign;
