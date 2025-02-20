import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';


export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.test.app',
    projectId: '67b6d9e70000dea57cc9',
    databaseId: '67b6dbbd000138179c7f',
    userCollectionId: '67b6dbf00038646ffc20',
    videoCollectionId: '67b6dc3a0022c5809875',
    storageId: '67b6ddd8001957313366'
}

const client = new Client();
const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

client
    .setEndpoint(appwriteConfig.endpoint) 
    .setProject(appwriteConfig.projectId) 
    .setPlatform(appwriteConfig.platform);



export const createUser = async ({ username, email, password }: { username: string, email: string, password: string }) => {
    
    try {
        const newAccount = await account.create(ID.unique(), email, password, username);
        
        if (!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username);

        await signIn({ email, password });
            
            const newUser = await databases.createDocument(appwriteConfig.databaseId, appwriteConfig.userCollectionId, ID.unique(), {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            });

            return newUser;

    } catch (error) {
        console.error(error)
    }
}


export async function signIn({ email, password }: { email: string, password: string }) {
    
    try {

        const currentSession = await account.get();

        if (currentSession) {
            console.log('user is already logged in.')
        } else {
            const session = await account.createEmailPasswordSession(email, password);

            return session;
        }

    } catch (error) {
        console.error(error)
    }
}


export const getCurrentUser = async () => {
    
    try {
        const session = await account.get();



   
    } catch (error) {
        console.error(error)
    }

}