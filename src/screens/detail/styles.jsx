import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
import { width } from "../../constants/lenght";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
  },







  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#1D1E1C'
  },
  detail: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 5,
    marginHorizontal: 10,
    color: '#1D1E1C'
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: COLORS.RED,
    borderRadius: 100,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  brandIcon: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    width: 55,
    height: 55,
    borderRadius: 40,
  },
});
