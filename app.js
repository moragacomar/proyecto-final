const showInfo = () => {
    const addClassActive = (el) => el.className = "active"
    const delClassActive = (el) => el.className = ""
    const showDataTitle = (title) => document.querySelector("#user_title").innerHTML = title;
    const showDataValue = (value) => document.querySelector("#user_value").innerHTML = value;
    const textTransform = (caps) => caps
        ? document.querySelector("#user_value").style.textTransform = "lowercase"
        : document.querySelector("#user_value").style.textTransform = "capitalize";

    const getCampos = [...document.querySelectorAll("#values_list > li")];

    getCampos.map(el => {
        el.addEventListener("mouseover", e => {
            getCampos.map(el => delClassActive(el));
            addClassActive(el);
            showDataTitle(el.dataset.title);
            showDataValue(el.dataset.value);
            textTransform(el.dataset.caps)
        })
    })
}

showInfo();