import expertsData from "./Events"

function Evenements({exportsData}){
    const totalPrix = exportsData.reduce((sum, event)=> sum + event.cout_journalier * event.defaultPrevented, 0)

    return(
        <>
        <table border={3} cellPadding={"1rem"}>
            <thead>
                <th>Theme</th>
                <th>Date de debut</th>
                <th>Date de fin</th>
                <th>Description</th>
                <th>Cout journalier</th>
                <th>Duree(jours)</th>
                <th>Cout total evenements</th>
            </thead>
            <tbody>
                {expertsData.Evenements.map(l => l)}
            </tbody>
        </table>
        </>
    )
}
export default Evenements