import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,        
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'        
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
        marginTop: 48,
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 24
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380'
    },

    footer: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16
    },

    footerTextTitle: {
        fontSize: 20,
        color: '#13131a',
        fontWeight: 'bold',
        marginBottom: 5
    },

    footerText: {
        color: '#737380',
        marginTop: 16,
        fontSize: 15
    },

    footerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16
    },

    footerButton: {
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    footerButtonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
});