import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import * as MailComposer from 'expo-mail-composer';
import api from '../../services/api';

export default function Detail() {
    const route = useRoute(); /* para buscar o parametros que foi recebido por outra tela */
    const incident = route.params.incident; /* pegando o valor do que foi recebido */

    const navigation = useNavigation();
    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(incident.value)}`;

    function navigationBack() {
        navigation.goBack();
    }

    function sendEmail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })
    }

    function sendWhatsApp() {
        const phone = `${incident.whatsapp}` //'5553981349914';

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
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG: {incident.name}</Text>
                <Text style={styles.incidentValue}>{incident.city} - {incident.uf}</Text>

                <Text style={styles.incidentProperty}>Caso:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>Descrição:</Text>
                <Text style={styles.incidentValue}>{incident.description}</Text>

                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>
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