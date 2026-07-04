import { View, Text, Pressable, FlatList, Image } from 'react-native'
import React from 'react'
import {
  formatCurrency,
  formatStatusLabel,
  formatSubscriptionDateTime,
} from '@/lib/utils'
import clsx from 'clsx'

const SubRow = ({
  title,
  value,
}: {
  title: string
  value: string
}) => {
  return (
    <View className='sub-row'>
      <View className='sub-row-copy'>
        <Text className='sub-label'>{title}</Text>

        <Text
          className='sub-value'
          numberOfLines={1}
          ellipsizeMode='tail'
        >
          {value}
        </Text>
      </View>
    </View>
  )
}

const SubscriptionCard = ({
  name,
  price,
  currency,
  icon,
  billing,
  color,
  category,
  plan,
  renewalDate,
  isCancelling,
  paymentMethod,
  startDate,
  status,
  onPress,
  expanded,
}: SubscriptionCardProps) => {
  const subRows = [
    {
      title: 'Payment: ',
      value: paymentMethod?.trim() || '',
    },
    {
      title: 'Category: ',
      value: category?.trim() || plan?.trim() || '',
    },
    {
      title: 'Started: ',
      value: startDate
        ? formatSubscriptionDateTime(startDate)
        : '',
    },
    {
      title: 'Renewal Date: ',
      value: renewalDate
        ? formatSubscriptionDateTime(renewalDate)
        : '',
    },
    {
      title: 'Status: ',
      value: status
        ? formatStatusLabel(status)
        : '',
    },
  ]

  return (
    <Pressable
      onPress={onPress}
      className={clsx(
        'sub-card',
        expanded ? 'sub-card-expanded' : 'bg-card'
      )}
      style={
        !expanded && color
          ? { backgroundColor: color }
          : undefined
      }
    >
      <View className='sub-head'>
        <View className='sub-main'>
          <Image source={icon} className='sub-icon' />

          <View className='sub-copy'>
            <Text className='sub-title' numberOfLines={1}>
              {name}
            </Text>
          </View>

          <Text
            numberOfLines={1}
            ellipsizeMode='tail'
            className='sub-meta'
          >
            {category?.trim() ||
              plan?.trim() ||
              (renewalDate
                ? formatSubscriptionDateTime(renewalDate)
                : '')}
          </Text>
        </View>

        <View className='sub-price-box'>
          <Text className='sub-price'>
            {formatCurrency(price, currency)}
          </Text>

          <Text className='sub-billing'>{billing}</Text>
        </View>
      </View>

      {expanded && (
        <View className='sub-body'>
          <View className='sub-details'>
            <FlatList
              data={subRows}
              keyExtractor={(item) => item.title}
              renderItem={({ item }) => (
                <SubRow
                  title={item.title}
                  value={item.value}
                />
              )}
              scrollEnabled={false}
            />
          </View>
        </View>
      )}
    </Pressable>
  )
}

export default SubscriptionCard