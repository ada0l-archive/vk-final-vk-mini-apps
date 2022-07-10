import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import {
  View,
  ScreenSpinner,
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  SplitLayout,
  SplitCol,
} from "@vkontakte/vkui";

import "@vkontakte/vkui/dist/vkui.css";
import "@vkontakte/vkui/dist/unstable.css";

import { Home, Settings, CreateSign } from "./panels";

const App = () => {
  const [scheme, setScheme] = useState("bright_light");
  const [activePanel, setActivePanel] = useState("home");
  const [owner, setOwner] = useState(null);
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);

  useEffect(() => {
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === "VKWebAppUpdateConfig") {
        setScheme(data.scheme);
      }
    });

    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");
      setUser(user);
      setPopout(null);

      const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
      const ownerID = params.vk_profile_id ?? params.vk_user_id;
      const ownerName = await bridge
        .send("VKWebAppCallAPIMethod", {
          method: "users.get",
          request_id: "32test",
          params: {
            user_ids: ownerID,
            name_case: "acc",
            v: 5.131,
            access_token: process.env.REACT_APP_ACCESS_TOKEN,
          },
        })
        .then(({ response }) => response[0].first_name);
      setOwner({ id: ownerID.toString(), name: ownerName });
    }
    fetchData();
  }, []);

  const go = (e) => {
    setActivePanel(e.currentTarget.dataset.to);
  };

  return (
    <ConfigProvider scheme={scheme}>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout popout={popout}>
            <SplitCol>
              <View activePanel={activePanel}>
                <Home
                  id="home"
                  fetchedUser={fetchedUser}
                  owner={owner}
                  go={go}
                />
                <Settings id="settings" fetchedUser={fetchedUser} go={go} />
                <CreateSign
                  id="create_sign"
                  fetchedUser={fetchedUser}
                  owner={owner}
                  go={go}
                />
              </View>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
