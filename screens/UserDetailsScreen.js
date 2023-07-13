import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

export default function UserDetailsScreen({ index }) {
  const navigation = useNavigation();

  const [name, setName] = useState("Eduardo Aguilar");
  const [address, setAddress] = useState("M.Belgrano 1996");
  const [editingName, setEditingName] = useState(false);
  const [editingAddress, setEditingAddress] = useState(false);
  const [newName, setNewName] = useState("");
  const [newAddress, setNewAddress] = useState("");

  const handleNameEdit = () => {
    setEditingName(true);
  };

  const handleAddressEdit = () => {
    setEditingAddress(true);
  };

  const handleSaveName = () => {
    if (newName !== "") {
      setName(newName);
      setNewName("");
      setEditingName(false);
    }
  };

  const handleSaveAddress = () => {
    if (newAddress !== "") {
      setAddress(newAddress);
      setNewAddress("");
      setEditingAddress(false);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Image
        blurRadius={20}
        source={require("../assets/images/background.png")}
        style={{ position: "absolute", width: "100%", height: "100%" }}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: "white",
              padding: 10,
              borderRadius: 999,
            }}
          >
            <ChevronLeftIcon size={23} stroke={50} color="black" />
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "rgba(255,255,255,0.7)",
              borderRadius: 999,
              padding: 3,
            }}
          >
            <Image
              source={require("../assets/images/avatar.png")}
              style={{
                height: 48,
                width: 48,
                borderRadius: 999,
                backgroundColor: "rgba(255,255,255,0.7)",
              }}
            />
          </View>
        </View>

        <Animatable.View
          delay={index * 120}
          animation="slideInRight"
          style={{
            margin: 16,
            padding: 16,
            borderRadius: 24,
            backgroundColor: "rgba(255,255,255,0.2)",
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
            Nombre: <Text style={{ color: "green" }}>{name}</Text>
          </Text>
          {!editingName ? (
            <TouchableOpacity
              onPress={handleNameEdit}
              className="bg-gray-800 p-3 mt-6 rounded-2xl"
            >
              <Text
                style={{ color: "white", fontSize: 16, textAlign: "center" }}
                className="text-white text-lg text-center"
              >
                Editar
              </Text>
            </TouchableOpacity>
          ) : (
            <Modal
              animationType="slide"
              transparent={true}
              visible={editingName}
              onRequestClose={() => setEditingName(false)}
            >
              <View
                className="bg-white p-4 mx-4 rounded-lg"
                style={{ height: 150, marginTop: 300 }}
              >
                <TextInput
                  placeholder="Nuevo nombre"
                  value={newName}
                  onChangeText={(text) => setNewName(text)}
                  style={{ textAlign: "center" }}
                />
                <TouchableOpacity
                  onPress={handleSaveName}
                  className="bg-gray-800 p-3 mt-6 rounded-2xl"
                >
                  <Text
                    style={{
                      fontSize: 16,
                      textAlign: "center",
                    }}
                    className="text-white text-lg text-center"
                  >
                    Guardar
                  </Text>
                </TouchableOpacity>
              </View>
            </Modal>
          )}
        </Animatable.View>

        <Animatable.View
          delay={index * 120}
          animation="slideInRight"
          style={{
            margin: 16,
            padding: 16,
            borderRadius: 24,
            backgroundColor: "rgba(255,255,255,0.2)",
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
            Dirección: <Text style={{ color: "green" }}>{address}</Text>
          </Text>
          {!editingAddress ? (
            <TouchableOpacity
              onPress={handleAddressEdit}
              className="bg-gray-800 p-3 mt-6 rounded-2xl"
            >
              <Text
                style={{ color: "white", fontSize: 16, textAlign: "center" }}
                className="text-white text-lg text-center"
              >
                Editar
              </Text>
            </TouchableOpacity>
          ) : (
            <Modal
              transparent={true}
              visible={editingAddress}
              onRequestClose={() => setEditingAddress(false)}
            >
              <View
                className="bg-white p-4 mx-4 rounded-lg"
                style={{ height: 150, marginTop: 300 }}
              >
                <TextInput
                  placeholder="Nueva dirección"
                  value={newAddress}
                  onChangeText={(text) => setNewAddress(text)}
                  style={{ textAlign: "center" }}
                />
                <TouchableOpacity
                  onPress={handleSaveAddress}
                  className="bg-gray-800 p-3 mt-6 rounded-2xl"
                >
                  <Text
                    style={{
                      fontSize: 16,
                      textAlign: "center",
                    }}
                    className="text-white text-lg text-center"
                  >
                    Guardar
                  </Text>
                </TouchableOpacity>
              </View>
            </Modal>
          )}
        </Animatable.View>

        <Animatable.View
          delay={index * 120}
          animation="slideInRight"
          style={{
            margin: 16,
            padding: 16,
            borderRadius: 24,
            backgroundColor: "rgba(255,255,255,0.2)",
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
            Tarjeta: <Text style={{ color: "red" }}>*******************</Text>
          </Text>
          <TouchableOpacity
            onPress={() => handleOrderDetails(order)}
            className="bg-gray-800 p-3 mt-6 rounded-2xl"
          >
            <Text
              style={{ color: "white", fontSize: 16, textAlign: "center" }}
              className="text-white text-lg text-center"
            >
              Editar
            </Text>
          </TouchableOpacity>
        </Animatable.View>
      </SafeAreaView>
    </View>
  );
}
