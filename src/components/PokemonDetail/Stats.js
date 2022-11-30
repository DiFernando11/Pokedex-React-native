import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Stats = ({ stats }) => {
  const barStyles = (num) => {
    const color = num > 100 ? "#efb810" : num > 49 ? "#00ac17" : "#ff3e3e";
    return { backgroundColor: color, width: `${num}%` };
  };
  return (
    <View style={styles.content}>
      <Text style={styles.title}> Base Stats</Text>
      {stats.length &&
        stats.map((stat) => (
          <View style={styles.block} key={stat.stat.name}>
            <View style={styles.blockTitle}>
              <Text style={styles.statName}>{stat.stat.name}</Text>
            </View>
            <View style={styles.blockInfo}>
              <Text style={styles.numberStat}>{stat.base_stat}</Text>
              <View style={styles.bgBar}>
                <View
                  style={[styles.progressBar, barStyles(stat.base_stat)]}
                ></View>
              </View>
            </View>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    backgroundColor: "#696969",
    height: 260,
    paddingVertical: 10,
    borderTopEndRadius: 60,
    borderBottomLeftRadius: 60,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
    color: "#fff",
  },
  containerStats: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  blockTitle: {
    width: "30%",
  },
  statName: {
    fontSize: 16,
    color: "#fff",
    textTransform: "capitalize",
  },
  blockInfo: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  numberStat: {
    width: "12%",
    fontSize: 16,
    color: "#fff",
  },
  bgBar: {
    backgroundColor: "#dedede",
    width: "88%",
    height: 5,
    borderRadius: 20,
    overflow: "hidden",
  },
  progressBar: {
    backgroundColor: "red",
    width: "80%",
    height: 5,
    borderRadius: 20,
  },
});

export default Stats;
