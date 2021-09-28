const body = {
    sauceId: 'abcdefg',
    userId: 'laure',
    like: 0
 }
 
 const sauce = {
    id: 'abcdefg',
    likes: 1,
    usersDisliked: [],
    usersLiked: ['laure']
 }
 
 function gestionDeLikes(body) {
    if (body.like === -1) {
       console.log(`La personne dislike la sauce ${body.sauceId}`)
       sauce.usersDisliked.push(body.userId)
       sauce.likes--
       console.log(sauce)
    }
    else if (body.like === 1) {
       console.log(`La personne like la sauce ${body.sauceId}`)
       sauce.usersLiked.push(body.userId)
       sauce.likes++
       console.log(sauce)
    }
    else if (body.like === 0) {
       console.log(`La personne unlike la sauce ${body.sauceId}`)
       if (sauce.usersLiked.includes(body.userId)) {
          const userPosition = sauce.usersLiked.indexOf(body.userId)
          sauce.usersLiked.splice(userPosition, 1)
          sauce.likes--
          console.log(sauce)
       }
    }
    else {
       console.log('Erreur')
    }
 }
 
 gestionDeLikes(body)