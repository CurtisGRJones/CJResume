import { Attributes, Model, ModelAttributes, ModelOptions, ModelStatic, Sequelize } from "sequelize";
import config from "../../config";

export class DbConnection {
    static getConnection = () => {
        const {
            MYSQL_USER: mySqlUser,
            MYSQL_PASS: mySqlPass,
            MYSQL_HOST: mySqlHost,
            MYSQL_PORT: mySqlPort,
            MYSQL_DB_NAME: mySqlDbName,
        } = config

        if (!(mySqlUser && mySqlPass && mySqlHost && mySqlPort && mySqlDbName)) {
            throw Error('MySQL vard not set')
        }

        return new Sequelize(
            mySqlDbName,
            mySqlUser,
            mySqlPass,
            {
                host: mySqlHost,
                // TODO check this is a valid number before hand
                port: Number(mySqlPort),
                dialect: 'mysql'
            }
        );
    }
    static connection = DbConnection.getConnection()

    static define = <M extends Model, TAttributes = Attributes<M>>(
        modelName: string,
        attributes: ModelAttributes<M, TAttributes>,
        options?: ModelOptions<M>
    ): ModelStatic<M> => {
        return DbConnection.connection.define(
            modelName,
            attributes,
            options
        )
    }
}