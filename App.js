import {StyleSheet, Text, View, ScrollView} from 'react-native';

export default function App() {
    return <Display/>;
}

function Display() {
    return (
        <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
            {/* Exercise 1 */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Exercise 1</Text>
                <Text style={{fontSize: 24}}>Values</Text>
                <Text style={{color: 'green'}}>Excellence</Text>
                <Text style={{backgroundColor: 'yellow'}}>Customer-Centric</Text>
                <Text style={{fontStyle: 'italic'}}>Integrity</Text>
                <Text style={{textAlign: 'center'}}>Teamwork</Text>
                <Text style={{color: 'white', backgroundColor: 'black'}}>Enterprising</Text>
            </View>

            {/* Exercise 2 */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Exercise 2</Text>
                <Text style={[styles.greenBox, styles.title, styles.boxText]}>Who We Are</Text>
                <Text style={[styles.greenBox, styles.boxText]}>Our people</Text>
                <Text style={[styles.greenBox, styles.boxText]}>Our Campus</Text>
            </View>

            {/* Exercise 3A */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Exercise 3A</Text>
                <View style={styles.Parent}>
                    <Text style={styles.Child}>Child One</Text>
                    <Text style={styles.Child}>Child Two</Text>
                    <Text style={styles.Child}>Child Three</Text>
                </View>
            </View>

            {/* Exercise 3B */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Exercise 3B</Text>
                <View style={styles.Parent2}>
                    <Text style={styles.Child2}>Child One</Text>
                    <Text style={styles.Child2}>Child Two</Text>
                    <Text style={styles.Child2}>Child Three</Text>
                </View>
            </View>

            {/* Exercise 3C */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Exercise 3C</Text>
                <View style={styles.Parent3}>
                    <Text style={[styles.Child3, {width: 90}]}>Child One</Text>
                    <Text style={styles.Child3}>Child Two</Text>
                    <Text style={[styles.Child3, {maxHeight: 25}]}>Child Three</Text>
                </View>
            </View>

            {/*Exercise 3D*/}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Exercise 3D</Text>
                <View style={styles.Parent}>
                    <Text style={[styles.Child, {flex: 1}]}>Child One</Text>
                    <Text style={[styles.Child, {flex: 2}]}>Child Two</Text>
                    <Text style={[styles.Child, {flex: 3}]}>Child Three</Text>
                </View>
            </View>

            {/*Exercise 3E*/}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Exercise 3E</Text>
                <View style={styles.Parent4}>
                    <Text style={styles.Child4}>Child One</Text>
                    <Text style={styles.Child4}>Child Two</Text>
                    <Text style={styles.Child4}>Child Three</Text>
                </View>
            </View>

            {/*Exercise 4*/}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Exercise 4</Text>
                <View style={styles.Parent5}>
                    <View style={[styles.Child5, {backgroundColor: 'red'}]}>
                        <Text>Square 1</Text>
                    </View>
                    <View style={[styles.Child5, {backgroundColor: 'green'}]}>
                        <Text>Square 2</Text>
                    </View>
                    <View style={[styles.Child5, {backgroundColor: 'blue'}]}>
                        <Text>Square 3</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        padding: 20,
    },
    section: {
        marginBottom: 40,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    greenBox: {
        width: 100,
        height: 100,
        marginTop: 10,
        backgroundColor: 'green',
        borderWidth: 1,
    },
    boxText: {
        textAlign: 'center',
        color: 'white',
    },
    title: {
        fontWeight: 'bold',
    },
    Parent: {
        flexDirection: 'row',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
    },
    Child: {
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24,
        flex: 1,
    },
    Parent2: {
        flexDirection: 'column',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
        flex: 1,
    },
    Child2: {
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24,
        flex: 1,
    },
    Parent3: {
        flexDirection: 'column',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
        flex: 1,
    },
    Child3: {
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24,
        flex: 1,
    },
    Parent4: {
        flexDirection: 'column',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
        flex: 1,
        // justifyContent: 'flex-end',
        // justifyContent: 'flex-start',
        // justifyContent: 'space-between',
        justifyContent: 'space-evenly',
    },
    Child4: {
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24,
        flex: 1,
    },
    Child5: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    Parent5: {
        backgroundColor: 'whitesmoke',
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

});
