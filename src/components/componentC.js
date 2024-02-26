import { InstagramEmbed } from "react-social-media-embed";
import { TikTokEmbed } from "react-social-media-embed";
import { YouTubeEmbed } from "react-social-media-embed";

const ComponentC = ({ url }) => {
  return (
    <>
      {url.includes("instagram") ? (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <InstagramEmbed
              url={url}
              width={328}
            />
          </div>
        </>
      ) : (
        <>
          {url.includes("tiktok") ? (
            <>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <TikTokEmbed
                  url={url}
                  width={325}
                />
              </div>
            </>
          ) : (
            <>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <YouTubeEmbed
                  url={url}
                  width={325}
                  height={220}
                />
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};
export default ComponentC;
