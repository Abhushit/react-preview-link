// interface Previewprops {
//   link?: string;
//   width?: string;
//   height?: string;
// }

export const Preview = ({ link, width, height }) => {
    var preview;

    const previewLink = () => {
        document.addEventListener("DOMContentLoaded", () => {
        preview = document.getElementById("preview_div");

        var iFrame = document.createElement("iframe");
        iFrame.src = link || "https://react.dev";
        iFrame.style.width = width || "100%";
        iFrame.style.height = height || "500px";

        preview.innerHTML = "";
        preview?.appendChild(iFrame);
        })
    }

    previewLink();

    return <div id="preview_div"> </div>
};
