import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import {
  Container,
  TabButton
} from './styles'

const styles = StyleSheet.create({
  container: { flexDirection: "row", height: 52, elevation: 2 },
  tabButton: { flex: 1, justifyContent: "center", alignItems: "center" }
});

const TabBar = props => {
  const {
    renderIcon,
    getLabelText,
    activeColor,
    inactiveTintColor,
    onTabPress,
    onTabLongPress,
    getAccessibilityLabel,
    navigation
  } = props;

  const { routes, index: activeRouteIndex } = navigation.state;

  const defineColor = (routeIndex) => {
    switch (routeIndex) {
      case 0:
        return '#FA6916'
    
      case 1:
        return '#7FA01D'
    
      case 2:
        return '#E20816'
    
      case 3:
        return '#0084D7'
    
      default:
        return '#833074'
    }
  }

  return (
    <Container style={styles.container}>
      {routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === activeRouteIndex;

        const tintColor = isRouteActive ? activeColor : inactiveTintColor;

        return (
          <TabButton
            key={routeIndex}
            onPress={() => {
              onTabPress({ route });
            }}
            onLongPress={() => {
              onTabLongPress({ route });
            }}
            accessibilityLabel={getAccessibilityLabel({ route })}
          >
            {renderIcon({ route, focused: isRouteActive, tintColor })}

          </TabButton>
        );
      })}
    </Container>
  );
};

export default TabBar;