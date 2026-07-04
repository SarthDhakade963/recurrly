import { FlatList, Image, Text, View } from "react-native";
import { useState } from "react";
import dayjs from "dayjs";

import "@/global.css";

import { formatCurrency, SafeAreaView } from "@/lib/utils";
import images from "@/constants/image";
import { icons } from "@/constants/icons";

import {
  HOME_BALANCE,
  HOME_SUBSCRIPTIONS,
  HOME_USER,
  UPCOMING_SUBSCRIPTIONS,
} from "@/constants/data";

import ListHeading from "@/components/ListHeading";
import UpcomingSubscriptionCard from "@/components/UpcomingSubscriptionCard";
import SubscriptionCard from "@/components/SubscriptionCard";

export default function App() {
  const [expandedSubscriptionId, setExpandedSubscriptionId] = useState<
    string | null
  >(null);

  return (
    <SafeAreaView className="p-5 flex-1 bg-background">
      <FlatList
        data={HOME_SUBSCRIPTIONS}
        keyExtractor={(item) => item.id}
        extraData={expandedSubscriptionId}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="h-4" />}
        ListHeaderComponent={
          <>
            <View className="home-header">
              <View className="home-user">
                <Image source={images.avatar} className="home-avatar" />

                <Text className="home-user-name">
                  {HOME_USER.name}
                </Text>
              </View>

              <Image source={icons.add} className="home-add-icon" />
            </View>

            <View className="home-balance-card">
              <Text className="home-balance-label">
                Balance
              </Text>

              <View className="home-balance-row">
                <Text className="home-balance-amount">
                  {formatCurrency(HOME_BALANCE.amount)}
                </Text>

                <Text className="home-balance-date">
                  {dayjs(HOME_BALANCE.nextRenewalDate).format("DD/MM")}
                </Text>
              </View>
            </View>

            <View className="mb-4">
              <ListHeading title="Upcoming" />

              <FlatList
                data={UPCOMING_SUBSCRIPTIONS}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <UpcomingSubscriptionCard {...item} />
                )}
                ListEmptyComponent={
                  <Text className="home-empty-state">
                    No upcoming renewals yet.
                  </Text>
                }
              />
            </View>

            <ListHeading title="All Subscription" />
          </>
        }
        renderItem={({ item }) => (
          <SubscriptionCard
            {...item}
            expanded={expandedSubscriptionId === item.id}
            onPress={() =>
              setExpandedSubscriptionId((currentId) =>
                currentId === item.id ? null : item.id
              )
            }
          />
        )}
        ListEmptyComponent={
          <Text className="home-empty-state">
            No subscription yet.
          </Text>
        }
        contentContainerClassName="pb-30"
      />
    </SafeAreaView>
  );
}