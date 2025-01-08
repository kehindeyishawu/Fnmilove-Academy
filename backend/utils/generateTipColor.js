export default function generateTipColor() {
    let colors = ["primary", "secondary", "info"]
    let randomIndex = Math.round((Math.random() * (colors.length - 1)))
    return colors[randomIndex]
}