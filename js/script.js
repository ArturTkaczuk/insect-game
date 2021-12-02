const play_game_btn = document.querySelector('.play-game-btn')
const game_container = document.querySelector('.game-container')

play_game_btn.addEventListener('click', () => {
    game_container.style.transform = "translateX(-100vw)"
})