import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import * as MailComposer from 'expo-mail-composer';

export default function Detail() {
    const navigation = useNavigation();
    const message = 'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha atropelada" com o valor de R$ 120,00';

    function navigationBack() {
        navigation.goBack();
    }

    function sendEmail() {
        MailComposer.composeAsync({
            subject: 'Herói do caso: Cadelinha atropelada',
            recipients: ['felipemaillo@icloud.com'],
            body: message,
        })
    }

    function sendWhatsApp() {
        const phone = '5553981349914';

        Linking.openURL(`whatsapp://send?phone=${phone}&text=${message}`);
    }

    return (
         <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity style={styles.detailsButton} onPress={navigationBack}>
                    <Feather name="arrow-left" size={28} color='#e02041' />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty], { marginTop: 0 }}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>Caso:</Text>
                <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

                <Text style={styles.incidentProperty}>Descrição:</Text>
                <Text style={styles.incidentValue}>A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia de emergência.</Text>

                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerTextTitle}>Salve o dia!</Text>
                <Text style={styles.footerTextTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.footerText}>Entre em contato:</Text>

                <View style={styles.footerButtons}>
                    <TouchableOpacity style={styles.footerButton} onPress={sendWhatsApp}>
                        <Text style={styles.footerButtonText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.footerButton} onPress={sendEmail}>
                        <Text style={styles.footerButtonText}>E-Mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}