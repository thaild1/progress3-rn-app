import { styles } from "@/styles/feed.styles";
import { formatDistanceToNow } from "date-fns";
import { Image, Text, View } from "react-native";

interface CommentType {
  content: string;
  _creationTime: number;
  user: {
    fullname: string;
    image: string;
  };
}

export default function Comment({ commenType }: { commenType: CommentType }) {
  return (
    <View style={styles.commentContainer}>
      <Image
        source={{ uri: commenType.user.image }}
        style={styles.commentAvatar}
      />
      <View style={styles.commentContent}>
        <Text style={styles.commentUsername}>{commenType.user.fullname}</Text>
        <Text style={styles.commentText}>{commenType.content}</Text>
        <Text style={styles.commentTime}>
          {formatDistanceToNow(commenType._creationTime, { addSuffix: true })}
        </Text>
      </View>
    </View>
  );
}
