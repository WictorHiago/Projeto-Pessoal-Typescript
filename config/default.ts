const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

export default {
    port: 3333,
    dbUri: `mongodb+srv://${dbUser}:${dbPassword}@atlascluster.ktp9c1a.mongodb.net/?retryWrites=true&w=majority`,
    env: 'development',
};
