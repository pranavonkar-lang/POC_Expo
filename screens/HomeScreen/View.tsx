import React from "react";
import { ScrollView, View, TouchableOpacity, FlatList } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import CustomButton from "@/components/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { CustomSpacer } from "@/components/CustomSpacer";
import CustomCounter from "@/components/CustomCounter";
import IconCardWithCount from "@/components/IconCardWithCount";
import CustomHeader from "@/components/CustomHeader";

export default function HomeScreen(props: any) {
  const { goNext } = props;

  const quickActions = [
    { title: "Profile", icon: "person", color: "#FF6B6B", onPress: () => {} },
    { title: "Settings", icon: "settings", color: "#4ECDC4", onPress: goNext },
    {
      title: "Notifications",
      icon: "notifications",
      color: "#45B7D1",
      onPress: () => {},
    },
    {
      title: "Messages",
      icon: "chatbubbles",
      color: "#96CEB4",
      onPress: () => {},
    },
  ];

  const recentActivities = [
    { title: "Profile Updated", time: "2 hours ago", icon: "checkmark-circle" },
    { title: "New Message", time: "4 hours ago", icon: "mail" },
    { title: "Settings Changed", time: "1 day ago", icon: "settings" },
  ];

  const featuredContent = [
    {
      title: "Getting Started Guide",
      description: "Learn the basics of our app",
      icon: "book",
    },
    {
      title: "Advanced Features",
      description: "Discover powerful tools",
      icon: "star",
    },
    {
      title: "Tips & Tricks",
      description: "Boost your productivity",
      icon: "bulb",
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* <CustomHeader
        title="Home"
        leftIcon={<Ionicons name="arrow-back" size={24} color="#007AFF" />}
        onLeftPress={() => console.log("Menu pressed")}
        rightIcon={<Ionicons name="notifications" size={24} color="#007AFF" />}
        onRightPress={() => console.log("Bell pressed")}
      /> */}
      <ThemedView style={styles.heroSection}>
        <View style={styles.heroContent}>
          <ThemedText style={styles.greeting}>Good morning! 👋</ThemedText>
          <ThemedText style={styles.heroTitle}>Welcome back</ThemedText>
          <ThemedText style={styles.heroSubtitle}>
            Ready to explore today's features?
          </ThemedText>
        </View>
      </ThemedView>
      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Quick Actions</ThemedText>
        <FlatList
          data={quickActions}
          keyExtractor={(item, index) => `quick-${index}`}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          contentContainerStyle={styles.quickActionsGrid}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.quickActionCard,
                { backgroundColor: item.color + "15" },
              ]}
              onPress={item.onPress}
            >
              <View
                style={[
                  styles.quickActionIcon,
                  { backgroundColor: item.color },
                ]}
              >
                <Ionicons name={item.icon as any} size={24} color="white" />
              </View>
              <ThemedText style={styles.quickActionTitle}>
                {item.title}
              </ThemedText>
            </TouchableOpacity>
          )}
        />
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Recent Activity</ThemedText>
        <FlatList
          data={recentActivities}
          keyExtractor={(item, index) => `activity-${index}`}
          contentContainerStyle={styles.activityList}
          renderItem={({ item }) => (
            <View style={styles.activityItem}>
              <View style={styles.activityIcon}>
                <Ionicons name={item.icon as any} size={20} color="#007AFF" />
              </View>
              <View style={styles.activityContent}>
                <ThemedText style={styles.activityTitle}>
                  {item.title}
                </ThemedText>
                <ThemedText style={styles.activityTime}>{item.time}</ThemedText>
              </View>
            </View>
          )}
        />
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Featured Content</ThemedText>
        <FlatList
          data={featuredContent}
          keyExtractor={(item, index) => `feature-${index}`}
          contentContainerStyle={styles.featuredList}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.featuredCard}>
              <View style={styles.featuredIcon}>
                <Ionicons name={item.icon as any} size={24} color="#007AFF" />
              </View>
              <View style={styles.featuredContent}>
                <ThemedText style={styles.featuredTitle}>
                  {item.title}
                </ThemedText>
                <ThemedText style={styles.featuredDescription}>
                  {item.description}
                </ThemedText>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#687076" />
            </TouchableOpacity>
          )}
        />
      </ThemedView>

      <ThemedView style={styles.section}>
        <View style={styles.ctaCard}>
          <ThemedText style={styles.ctaTitle}>Ready to get started?</ThemedText>
          <ThemedText style={styles.ctaSubtitle}>
            Explore all the amazing features we have to offer
          </ThemedText>
          <CustomButton
            title="Explore Now"
            onPress={goNext}
            type="primary"
            fullWidth
            style={styles.ctaButton}
          />
        </View>
      </ThemedView>
      <CustomSpacer height={26} />
    </ScrollView>
  );
}
