import { tabs } from "@/constants/data";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import clsx from "clsx";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors,components } from "@/constants/theme";


const TabBar = components.tabBar;

const Tabslayout = () => {
  const insets = useSafeAreaInsets();
  const TabIcon = ({ focused, icon }: TabIconProps) => {
    return(
        <View className="tabs-icon">
            <View className={clsx("tabs-pill", focused && "tabs-active")}>
                <Image source={icon} className="tabs-glyph"/>
            </View>
        </View>
    )
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: Math.max(insets.bottom,TabBar.horizontalInset),
          height: TabBar.height,
          marginHorizontal: TabBar.horizontalInset,
          borderRadius: TabBar.height,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarItemStyle:{
          paddingVertical: TabBar.height/2 - TabBar.iconFrame/1.7,
        },
      
        tabBarIconStyle: {
          height:TabBar.iconFrame,
          width: TabBar.iconFrame,
          alignItems: "center",
        }
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={tab.icon} />
            ),
          }}
        ></Tabs.Screen>
      ))}
    </Tabs>
  );
};

export default Tabslayout;
