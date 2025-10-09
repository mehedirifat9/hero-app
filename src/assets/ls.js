const addToLS = () => {


    const storedApps = localStorage.getItem("appList");


    if (storedApps) {
        const appData = JSON.parse(storedApps);
        return appData;
    }
    else {
        return []
    }
}

const getFromLS = (id) => {

    const appData = addToLS();


    if (appData.includes(id)) {
        alert("ID already Exists")
    }
    else {
        appData.push(id);
        const data = JSON.stringify(appData)
        localStorage.setItem("appList", data)
    }
}

export { getFromLS, addToLS };