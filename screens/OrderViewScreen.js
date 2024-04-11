// OrderViewScreen.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  
} from "react-native";

import TitleBar from "../components/TitleBar";
import BottomBar from "../components/BottomBar";
import style from "../constants/style";
import { MaterialIcons } from "@expo/vector-icons";
import { lightTheme, darkTheme } from "../constants/ThemeStyles";
import { useTheme } from "../components/ThemeProvider";
import Toast from 'react-native-toast-message'; // Import Toast from react-native-toast-message

const OrderViewScreen = ({ navigation,route }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    // Retrieve orderId from route params
    const orderId = route.params?.orderId;
    if (orderId) {
      fetchOrderDetails(orderId);
    }
  }, []);

  const fetchOrderDetails = async (orderId) => {
    try {
      const response = await fetch(
        "http://194.195.116.199/owner_api/order/view",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            restaurant_id: 13,
            order_id:orderId
          }),
        }
      );
      const data = await response.json();
      if (data.st === 1) {
        setOrderDetails(data.order_details);
        Toast.show({
          type: 'success',
          //text1: 'Success',
          text1: data.msg,
        });
      } else{
      console.error("Failed to fetch order details:", data.msg);
      // Display an error toast message with the custom message from the backend
      Toast.show({
        type: 'error',
        //text1: 'Error',
        text1: data.msg,
      });
    }
    } catch (error) {
      console.error("Error fetching order details:", error);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Something went wrong',
      });
    }
  };

  const containerStyle = {
    backgroundColor: isDarkMode
      ? darkTheme.backgroundColor
      : lightTheme.backgroundColor,
  };

  const pageContainerStyle = {
    backgroundColor: isDarkMode
      ? darkTheme.PageContainer
      : lightTheme.PageContainer,
  };

  const textStyle = {
    color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
  };

  return (
    <>
      <TitleBar title="Order View" />
      <View style={[style.pageContainer, pageContainerStyle]}>
        <ScrollView contentContainerStyle={[style.scrollContainer]}>
          <View style={[style.container, containerStyle]}>
            {orderDetails ? (
              <>
                {/* Display order details */}
                <View style={styles.data}>
                  <View style={styles.row}>
                    <Text style={[styles.value, textStyle]}>
                      {orderDetails.order_number}
                    </Text>
                    <Text style={[styles.title]}>Order Number</Text>
                  </View>

                  <View style={styles.row}>
                    <Text style={[styles.value, textStyle]}>
                      {orderDetails.order_status}
                    </Text>
                    <Text style={[styles.title]}>Order Status</Text>
                  </View>
                </View>

                <View style={styles.data}>
                  <View style={styles.row}>
                    <Text style={[styles.value, textStyle]}>
                      {orderDetails.menu_count}
                    </Text>
                    <Text style={[styles.title]}>Menu Count</Text>
                  </View>

                  <View style={styles.row}>
                    <Text style={[styles.value, textStyle]}>
                      {orderDetails.total_bill}
                    </Text>
                    <Text style={[styles.title]}>Total Bill</Text>
                  </View>
                </View>

                <View style={styles.data}>
                  <View style={styles.row}>
                    <Text style={[styles.value, textStyle]}>
                      {orderDetails.order_created_on}
                    </Text>
                    <Text style={[styles.title]}>Order Created On</Text>
                  </View>

                  <View style={styles.row}>
                    <Text style={[styles.value, textStyle]}>
                      {orderDetails.order_created_by}
                    </Text>
                    <Text style={[styles.title]}>Order Created By</Text>
                  </View>
                </View>

                {/* Display menu details */}
                <View style={styles.tableContainer}>
                  <View style={styles.tableRow}>
                    <View style={[styles.tableCell, styles.tableHeaderCell]}>
                      <Text style={[styles.tableText, styles.tableHeaderText]}>
                        Menu
                      </Text>
                    </View>
                    <View style={[styles.tableCell, styles.tableHeaderCell]}>
                      <Text style={[styles.tableText, styles.tableHeaderText]}>
                        Quantity
                      </Text>
                    </View>
                    <View style={[styles.tableCell, styles.tableHeaderCell]}>
                      <Text style={[styles.tableText, styles.tableHeaderText]}>
                        Price
                      </Text>
                    </View>
                    <View style={[styles.tableCell, styles.tableHeaderCell]}>
                      <Text style={[styles.tableText, styles.tableHeaderText]}>
                        Total
                      </Text>
                    </View>
                  </View>
                  {orderDetails.menu_details.map((menu) => (
                    <View style={styles.tableRow} key={menu.menu_id}>
                      <View style={styles.tableCell}>
                        <Text style={styles.tableText}>{menu.name}</Text>
                      </View>
                      <View style={styles.tableCell}>
                        <Text style={styles.tableText}>{menu.quantity}</Text>
                      </View>
                      <View style={styles.tableCell}>
                        <Text style={styles.tableText}>Rs{menu.price}</Text>
                      </View>
                      <View style={styles.tableCell}>
                        <Text style={styles.tableText}>
                          Rs{menu.price * menu.quantity}
                        </Text>
                      </View>
                    </View>
                  ))}
                  
                  <View style={styles.tableRow}>
  <View style={styles.tableCell}></View>
  <View style={styles.tableCell}></View>
  <View style={styles.tableCell}>
    <Text style={[styles.tableText, styles.tableHeaderText]}>Total</Text>
  </View>
  <View style={styles.tableCell}>
    <Text style={styles.tableText}>{orderDetails.total_bill}</Text>
  </View>
</View>

                </View>
                
              </>
            ) 
            : (
               <Text></Text>
            )
          }
          </View>
        </ScrollView>
      </View>
      <BottomBar />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  data: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 20,
    width: "48%",
  },
  title: {
    fontSize: 18,
    textTransform: "uppercase",
    color: "grey",
    fontFamily: "ROBOTO",
  },
  value: {
    fontSize: 18,
    color: "black",
    fontFamily: "ROBOTO",
  },
  tableContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  tableCell: {
    flex: 1,
    padding: 10,
    borderRightWidth: 1,
    borderRightColor: "black",
  },
  tableHeaderCell: {
    backgroundColor: "orange",
  },
  tableText: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "ROBOTO",
  },
  tableHeaderText: {
    color: "black",
    fontWeight: "bold",
  },
});

export default OrderViewScreen;
