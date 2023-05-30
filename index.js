function Drag(args = { itens, zones, itemClassInDragging, itemClassInOverZone, zonesClassItemDragging }) {
  const itens = document.querySelectorAll(args.itens)
  const zones = document.querySelectorAll(args.zones)

  const itemClassInDragging = args.itemClassInDragging || "item-dragging"
  const zonesClassItemDragging = args.zonesClassItemDragging || "item-over-zone"
  const itemClassInOverZone = args.itemClassInOverZone || "zone-over"

  let itemDragging

  const setup = () => {
    itens.forEach(item => {
      item.setAttribute("draggable", "true")

      item.addEventListener('dragstart', dragstart)
      item.addEventListener('drag', drag)
      item.addEventListener('dragend', dragend)
    })

    zones.forEach(zone => {
      zone.addEventListener('dragenter', dragenter)
      zone.addEventListener('dragover', dragover)
      zone.addEventListener('dragleave', dragleave)
      zone.addEventListener('drop', drop)
    })
  }

  // Item
  function dragstart() {
    zones.forEach(zone => zone.classList.add(zonesClassItemDragging.split(" ")))

    this.classList.add(itemClassInDragging.split(" "))

    itemDragging = this
  }

  function drag() { }

  function dragend() {
    zonesClassItemDragging.split(" ").forEach(className => zones.forEach(zone => zone.classList.remove(className)))
    itemClassInDragging.split(" ").forEach(className => this.classList.remove(className))

    itemDragging = null
  }

  // Zone
  function dragenter() { }

  function dragover() {
    this.classList.add(itemClassInOverZone.split(" "))

    this.appendChild(itemDragging)
  }

  function dragleave() {
    itemClassInOverZone.split(" ").forEach(className => this.classList.remove(className))
  }

  function drop() {
    itemClassInOverZone.split(className => this.classList.remove(className))
  }

  setup()
}
