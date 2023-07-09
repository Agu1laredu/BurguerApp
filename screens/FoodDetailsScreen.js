import {
  View,
  Text,
  Modal,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { HeartIcon, MinusIcon, PlusIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

export default function FoodDetailsScreen(props) {
  let item = props.route.params;
  const navigation = useNavigation();

  const [count, setCount] = useState(1);
  const [cartModalVisible, setCartModalVisible] = useState(false);
  const [favoriteModalVisible, setFavoriteModalVisible] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [deliveryTime, setDeliveryTime] = useState(15);

  const handleMinusPress = () => {
    if (count > 1) {
      setCount(count - 1);
      setDeliveryTime(deliveryTime - 5);
    }
  };

  const handlePlusPress = () => {
    setCount(count + 1);
    setDeliveryTime(deliveryTime + 5);
  };

  const addToCart = () => {
    // Aquí puedes implementar la lógica para agregar el item al carrito
    // Puedes usar el valor de `counter` y `item` para realizar la acción correspondiente
    // Por ejemplo, puedes almacenar el item y la cantidad en el estado global o enviarlos a una API
    console.log(`Agregando al carrito: ${counter} x ${item.name}`);
    setCartModalVisible(true); // Muestra el modal al agregar al carrito
  };
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    setFavoriteModalVisible(!isFavorite);
  };
  return (
    <View className="flex-1 bg-white">
      <Image
        source={require("../assets/images/background.png")}
        className="h-96 w-full absolute"
      />
      <SafeAreaView>
        <View className="flex-row justify-between mx-4 items-center">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-white rounded-2xl p-3 shadow"
          >
            <ChevronLeftIcon size="23" stroke={50} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={toggleFavorite}
            className="bg-white rounded-2xl p-3 shadow"
          >
            <HeartIcon size="23" color={isFavorite ? "red" : "black"} />
          </TouchableOpacity>
        </View>
        <View className="flex justify-center items-center">
          <Image className="h-48 w-48" source={item.image} />
          <Text className="text-3xl text-white"> {item.name}</Text>
        </View>
        <View className="flex-row justify-center items-center mt-6">
          <View
            id="counter"
            className="flex-row justify-between items-center bg-gray-100 rounded-2xl space-x-3"
          >
            <TouchableOpacity
              onPress={handleMinusPress}
              className="rounded-2xl bg-white border-2 border-gray-200 p-3"
            >
              <MinusIcon size="20" strokeWidth={1.8} color="black" />
            </TouchableOpacity>
            <Text className="text-xl">{count}</Text>
            <TouchableOpacity
              onPress={handlePlusPress}
              className="rounded-2xl bg-white border-2 border-gray-200 p-3"
            >
              <PlusIcon size="20" strokeWidth={1.8} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row justify-between items-center mx-4 h-20 overflow-hidden">
          <Animatable.View
            delay={180}
            animation="slideInDown"
            className="flex items-center h-8 space-y-2"
          >
            <Image
              source={require("../assets/icons/calories.png")}
              className="h-6 w-6"
            />
            <Text className="font-semibold">130 cal</Text>
          </Animatable.View>
          <Animatable.View
            delay={280}
            animation="slideInDown"
            className="flex items-center h-8 space-y-2"
          >
            <Image
              source={require("../assets/icons/clock.png")}
              className="h-6 w-6"
            />
            <Text className="font-semibold">
              {deliveryTime}-{deliveryTime + 5} min
            </Text>
          </Animatable.View>
          <Animatable.View
            delay={380}
            animation="slideInDown"
            className="flex items-center h-8 space-y-2"
          >
            <Image
              source={require("../assets/icons/chat.png")}
              className="h-6 w-6"
            />
            <Text className="font-semibold">4.6 vote</Text>
          </Animatable.View>
          <Animatable.View
            delay={480}
            animation="slideInDown"
            className="flex items-center h-8 space-y-2"
          >
            <Image
              source={require("../assets/icons/weight.png")}
              className="h-6 w-6"
            />
            <Text className="font-semibold">350 g</Text>
          </Animatable.View>
        </View>
        <View className="mx-4 mt-6 space-y-3 h-60">
          <Animatable.Text
            animation="slideInUp"
            className="text-3xl font-semibold text-gray-800"
          >
            Description
          </Animatable.Text>
          <Animatable.Text
            delay={100}
            animation="slideInUp"
            className="text-gray-600 tracking-wider"
          >
            {item.desc}
          </Animatable.Text>
        </View>
        <View className="mx-4 flex-row justify-between items-center">
          <Animatable.Text
            delay={100}
            animation="slideInLeft"
            className="text-3xl font-semibold text-gray-800"
          >
            ${item.price * count}
          </Animatable.Text>
          <Animatable.View delay={100} animation="slideInRight">
            <TouchableOpacity
              onPress={addToCart}
              className="bg-gray-800 p-4 px-14 rounded-2xl"
            >
              <Text className="text-white text-xl font-semibold">
                Add to Cart
              </Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={cartModalVisible}
          onRequestClose={() => setCartModalVisible(false)}
        >
          <View className="flex-1 justify-center align-center">
            <View className="bg-white p-6 mx-4 rounded-lg">
              <Text className="text-2xl font-semibold text-red-600 mb-4">
                Compra Exitosa
              </Text>
              <Text className="text-gray-600">¡Su pedido está en camino!</Text>
              <Pressable
                onPress={() => setCartModalVisible(false)}
                className="bg-gray-800 p-3 mt-6 rounded-2xl"
              >
                <Text className="text-white text-lg text-center">OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="fade"
          transparent={true}
          visible={favoriteModalVisible}
          onRequestClose={() => setFavoriteModalVisible(false)}
        >
          <View className="flex-1 justify-center align-center">
            <View className="bg-white p-6 mx-4 rounded-lg">
              <Text className="text-2xl font-semibold text-red-600 mb-4">
                {isFavorite ? "Agregado a Favoritos" : "Eliminado de Favoritos"}
              </Text>
              <Text className="text-gray-600">
                {isFavorite
                  ? "El ítem ha sido agregado a tus favoritos."
                  : "El ítem ha sido eliminado de tus favoritos."}
              </Text>
              <Pressable
                onPress={() => setFavoriteModalVisible(false)}
                className="bg-gray-800 p-3 mt-6 rounded-2xl"
              >
                <Text className="text-white text-lg text-center ">OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </View>
  );
}
