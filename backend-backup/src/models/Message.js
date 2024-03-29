import { DataTypes } from "sequelize";

export default {
    name: "Message",
    attributes: {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: "users",
                key: "id"
            }
        },
        room: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "rooms",
                key: "id"
            }
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        mentions: {
            type: DataTypes.JSON,
            allowNull: false,
            defaultValue: []
        },
        replyingTo: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: "messages",
                key: "id"
            }
        },
        edited: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    },
    options: {
        tableName: "messages"
    },
    relations: [
        { type: "belongsTo", model: "User", options: { foreignKey: "author", as: "authorData" } },
        { type: "belongsTo", model: "Room", options: { foreignKey: "room", as: "roomData" } },
        { type: "belongsTo", model: "Message", options: { foreignKey: "replyingTo", as: "replyingToData" } }
    ]
}