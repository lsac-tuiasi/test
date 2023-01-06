import React, { useEffect, useState } from "react";
import Butonel from "./Butonel";

const Content = (props) => {
    const [apasari, setApasari] = useState(0);
    const [trigger, setTrigger] = useState(0);

    useEffect(() => {
        console.log("ok");
    }, [trigger, apasari]);

    return <div>
        <p>Ai apasat butoanele de {apasari} ori.</p>
        {props.texte.map((elem, i) => <Butonel key={i} btnText={elem} setter={setApasari} counter={apasari} />)}
        <Butonel btnText={"trigger"} setter={setTrigger} counter={trigger} />
    </div>

    // Array(props.repeat) => [0, 1] cu map o trecut prin fiecare element si pentru fiecare element a trecut prin array-ul texte si a creeat pentru fiecare text cate un buton
                                //creeat 6 elemente in total
}

export default Content;

