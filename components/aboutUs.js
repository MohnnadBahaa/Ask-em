import React, { Component } from "react";
import {
  Modal,
  TouchableHighlight,
  View,
  Alert,
  StyleSheet,
  Image,
  ScrollView
} from "react-native";
import {
  Container,
  Header,
  Text,
  Left,
  Icon,
  Right,
  Input as TextInput
} from "native-base";
// import StarRating from "react-native-star-rating";

export default class AboutUs extends Component {
  static navigationOptions = {
    drawerIcon: () => <Icon name="star" style={{ fontSize: 30 }} />
  };
  state = {
    modalVisible: false,
    starCount: 3.5
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <Container style={{ alignItems: "center" }}>
        <View style={{ backgroundColor: "white" }}>
          <View style={styles.header}>
            <Header style={{ backgroundColor: "#E65100", width: "100%" }}>
              <Left>
                <Icon
                  style={styles.icon}
                  name="menu"
                  onPress={() => {
                    this.props.navigation.openDrawer();
                  }}
                />
              </Left>
              <Text style={styles.headerStyle}>About Us</Text>
            </Header>
          </View>
          <View style={styles.modalContainer}>
            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={() => {}}
            >
              <View style={{ marginTop: 30 }}>
                <View>
                  <Image
                    style={{ alignSelf: "center" }}
                    source={require("./assets/ask.png")}
                  />

                  <Text style={styles.textTitle}>
                    Ask'Em is a smart mobile app that uses machine learning to
                    achieve customers satisfaction. this app will give you the
                    opportunity to start your own business on a sure-footed, by
                    giving you the chance to ask a sample of people related to
                    your cause about your future plans, and here is our app role
                    comes when using it's brain to analyze and give a decision
                    that will help you to come up with your final decision
                    whether to go for it or not.
                  </Text>

                  <TouchableHighlight
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}
                  >
                    <Text
                      style={{ color: "red", textAlign: "right", margin: 10 }}
                    >
                      {"<<<Back"}
                    </Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
            <View>
              <Image
                style={{ alignSelf: "center", width: 150, height: 150 }}
                source={require("./assets/ask.png")}
              />
              <Text style={styles.textTitle}>
                Ask'Em is a smart mobile app that uses machine learning to
                achieve customers satisfaction. this app will give you the
                opportunity to start your own business on a sure-footed.
              </Text>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(true);
                }}
              >
                <Text
                  style={{ color: "red", textAlign: "right", marginBottom: 10 }}
                >
                  See more>>>
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "#DCDCDC"
    backgroundColor: "white"
  },
  textTitle: {
    fontSize: 19,
    // textAlignVertical: "center",
    // textAlign: "center",
    margin: 20,
    fontFamily: "Roboto"
  },
  textScreenElements: {
    fontSize: 19,
    fontFamily: "Roboto"
  },
  surveyValues: {
    textAlign: "left",
    fontSize: 18,
    fontFamily: "Roboto"
  },
  modalContainer: {
    width: "100%",
    backgroundColor: "white"
  },
  headerStyle: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlignVertical: "center",
    textAlign: "left",
    color: "white",
    fontSize: 22
  },
  icon: {
    color: "white",
    margin: 10,
    fontSize: 40,
    textAlign: "left"
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    borderBottomWidth: 1,
    width: 250,
    height: 50,
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: "#E65100"
  },
  inputs: {
    height: 45,
    borderBottomColor: "#E65100",
    flex: 1,
    color: "black",
    textAlign: "left",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 22
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center"
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    width: 250,
    borderRadius: 30
  },
  submitButton: {
    backgroundColor: "#E65100",
    justifyContent: "center"
  },
  submitText: {
    color: "white",
    alignItems: "center",
    fontSize: 17
  }
});
