export const findVocab = (text) => {
    var Vocabulary = 
    [
        ["inoculate", "Inoculating is transferring bacteria from solution onto growth media, usually by a small streaking loop."]
        ,["dilute", "Diluting is adding more growth media to an initial culture"]
        ,["induce", "Inducing is adding a certain reagent to trigger protein production in a culture"]
        ,["pellet", "Pelleting is running a centrifuge to separate bacteria from a culture"]
        ,["suspend", "Suspending is adding a liquid, usually to a bacterial pellet, for long term storage."]
        ,["aliquot", "Aliquoting is splitting a large amount of liquid into many smaller containers."]
        ,["lyophilize", "Lyophilizing is like freeze-drying, and is used to preserve bacteria & enyzmes."]
    ]
    var matches = []
    for(var i = 0; i<Vocabulary.length; i++)
    {
        var index = text.toLowerCase().indexOf(Vocabulary[i][0])
        if(index > -1)
        {
        matches.push([Vocabulary[i][0],Vocabulary[i][1], index])
        }
    }
    return matches;
}