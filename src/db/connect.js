const {username,password} = process.env
export const connectionSrt = 'mongodb+srv://'+username+':'+password+'@cluster0.xnbjybt.mongodb.net/EOH?retryWrites=true&w=majority&appName=Cluster0'