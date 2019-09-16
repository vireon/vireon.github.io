class Cat {
  constructor(prefixes_en, suffixes_en, prefixes_cn, suffixes_cn) {
    this.prefixes_en = prefixes_en;
    this.suffixes_en = suffixes_en;
    this.prefixes_cn = prefixes_cn;
    this.suffixes_cn = suffixes_cn;
  }

  generateName() {
    const pi = Math.floor(Math.random() * prefixes_en.length);
    const si = Math.floor(Math.random() * suffixes_en.length);
    const p_en = this.prefixes_en[pi];
    const s_en = this.suffixes_en[si];
    const p_cn = this.prefixes_cn[pi];
    const s_cn = this.suffixes_cn[si];
    return `<p id='displayName_en'>${p_en[0].toUpperCase() + p_en.slice(1) + s_en}</p>
    <p id='displayName_cn'>${p_cn + s_cn}</p>`;
  }
}

const cat1 = new Cat(prefixes_en=[
"white", "one", "one", "one", "ebony", "raven", "raven", "crow", "milk", "cloud", "cloud", "cloud", "cloud", "cloud", "cloud", "cloud", "lark", "lark", "lark", "lark", "lark", "cloud", "flax", "bright", "bright", "lost", "bright", "shining", "bright", "light", "hare", "rabbit", "hare", "hare", "rabbit", "rabbit", "rabbit", "rabbit", "hare", "hare", "starling", "starling", "holly", "holly", "holly", "holly", "holly", "ice", "ice", "ice", "rush", "rush", "strike", "thorn", "pike", "prickle", "prickle", "brave", "sparrow", "half", "half", "pebble", "pebble", "pebble", "pebble", "curly", "curl", "furled", "pigeon", "leaf", "leaf", "leaf", "leaf", "leaf", "leaf", "mumble", "harry", "harvey", "loud", "whistle", "sneeze", "snap", "echo", "echo", "echo", "patch", "log", "boulder", "sage", "hop", "dead", "nut", "flint", "spire", "spire", "night", "night", "night", "night", "night", "night", "night", "night", "sky", "clear", "sky", "running", "running", "running", "running", "milk", "milk", "twig", "hill", "little", "rabbit", "holly", "prickle", "prickle", "larch", "larch", "snip", "night", "swan", "hatch", "little", "wish", "elder", "patch", "splash", "small", "morning", "juniper", "willow", "blossom", "mistle", "little", "swamp", "marsh", "tumble", "gray", "ember", "ember", "finch", "hope", "down", "web", "small", "petal", "moss", "dandelion", "mint", "mist", "adder", "tulip", "wild", "marigold", "fallow", "vixen", "mist", "frost", "dew", "bluebell", "drift", "fly", "bristle", "minnow", "minnow", "perch", "buzzard", "little", "eagle", "weasel", "shrew", "spike", "spike", "dust", "dust", "dust", "rock", "rock", "heavy", "ripple", "ivy", "ivy", "hay", "strong", "tall", "shadow", "shadow", "tiny", "shimmer", "shimmer", "whispering", "breeze", "odd", "shy", "flutter", "pounce", "pounce", "pounce", "twisted", "kink", "sky", "arch", "swift", "swift", "dangling", "spotted", "dapple", "splash", "freckle", "freckle", "brindle", "brindle", "dappled", "dapple", "spot", "mottle", "dapple", "spotted", "splash", "spotted", "patch", "patch", "splash", "splash", "dapple", "broken", "broken", "sun", "sun", "sun", "sun", "sun", "sun", "sun", "bright", "star", "ivy", "morning", "morning", "morning", "morning", "morning", "sunny", "dark", "dark", "dark", "shade", "dark", "dark", "dusk", "dusk", "dusk", "dusk", "storm", "storm", "storm", "storm", "dawn", "dawn", "dawn", "dawn", "dawn", "moon", "bay", "moon", "timber", "kink", "spotted", "cedar", "cedar", "cedar", "plum", "juniper", "juniper", "willow", "aspen", "pine", "pine", "cone", "pine", "pine", "pine", "needle", "needle", "jay", "jay", "jay", "squirrel", "squirrel", "squirrel", "wood", "maple", "maple", "owl", "owl", "owl", "owl", "owl", "owl", "owl", "cypress", "soft", "soft", "willow", "willow", "willow", "willow", "willow", "willow", "sorrel", "cherry", "sorrel", "sorrel", "root", "myrtle", "twig", "birch", "birch", "birch", "birch", "birch", "birch", "plum", "plum", "blossom", "blossom", "pear", "brown", "beech", "beech", "beech", "beech", "beech", "hazel", "hazel", "hazel", "mistle", "cherry", "cherry", "cherry", "cherry", "primrose", "oliver", "oak", "acorn", "acorn", "acorn", "oak", "oak", "oak", "oak", "ragged", "doe", "billy", "otter", "pool", "sand", "sand", "river", "bubbling", "marsh", "marsh", "marsh", "ripple", "wave", "mud", "mud", "mud", "mud", "mud", "mud", "shrew", "splash", "puddle", "pale", "thrift", "ripple", "ripple", "whorl", "bright", "raven", "lake", "lake", "lake", "haven", "wet", "creek", "sleek", "sleek", "fire", "flame", "fire", "rush", "ash", "gray", "ash", "cinder", "gray", "gray", "gray", "ash", "pigeon", "cinder", "cinder", "blaze", "spark", "sharp", "soot", "smoke", "smoke", "smoke", "smoke", "smoke", "ember", "ember", "scorch", "scorch", "flame", "flame", "flame", "swallow", "swallow", "finch", "swallow", "oat", "oat", "oat", "oat", "oat", "talon", "claw", "milk", "doe", "stag", "hound", "hound", "fox", "fox", "fox", "fox", "fox", "lion", "lion", "lion", "lion", "lion", "wolf", "wolf", "lynx", "otter", "badger", "rose", "rose", "turtle", "amber", "amber", "amber", "sweet", "sweet", "vole", "vole", "vole", "vole", "beetle", "beetle", "thrush", "thrush", "thrush", "thrush", "quick", "swift", "swift", "mole", "mole", "white", "willow", "white", "white", "white", "white", "aspen", "white", "white", "white", "white", "pale", "white", "pale", "stoat", "stoat", "lily", "lily", "lily", "lily", "lily", "lily", "pike", "pike", "robin", "robin", "robin", "robin", "robin", "stumpy", "stone", "stone", "slate", "slate", "heather", "heather", "stone", "stone", "stone", "stone", "stone", "stone", "sandy", "rubble", "gravel", "shattered", "broken", "rubble", "seed", "seed", "hollow", "hollow", "hollow", "hollow", "seed", "pink", "violet", "yew", "violet", "red", "red", "red", "red", "red", "red", "red", "speckle", "speckle", "brindle", "brindle", "shred", "tiny", "fuzzy", "sheep", "bloom", "green", "green", "tangle", "tangle", "poppy", "poppy", "poppy", "web", "woolly", "fern", "feather", "feather", "feather", "feather", "feather", "feather", "feather", "feather", "flip", "fluttering", "fallow", "cinnamon", "hickory", "skunk", "tansy", "reed", "reed", "reed", "reed", "reed", "reed", "reed", "flower", "rowan", "rowan", "rowan", "rowan", "flower", "petal", "petal", "petal", "petal", "flower", "flower", "nectar", "moss", "moss", "moss", "moss", "lichen", "moss", "moss", "mossy", "clover", "clover", "clover", "apple", "apple", "apple", "apple", "apple", "apple", "apple", "stem", "fennel", "fennel", "tawny", "briar", "gorse", "furze", "gorse", "grass", "meadow", "meadow", "grass", "grass", "nettle", "nettle", "nettle", "nettle", "nettle", "nettle", "shade", "shade", "shaded", "sedge", "sedge", "sedge", "berry", "berry", "riley", "fallen", "falling", "falling", "falling", "fallen", "yarrow", "blue", "blue", "thistle", "thistle", "thistle", "thistle", "thistle", "vine", "fern", "frond", "bracken", "bracken", "fern", "braken", "bracken", "fern", "bracken", "mint", "mint", "mint", "lavender", "moss", "vine", "ivy", "tiger", "tiger", "ant", "ant", "midge", "maggot", "snake", "snake", "snake", "snake", "frog", "frog", "spider", "spider", "spider", "spider", "moth", "moth", "moth", "moth", "bee", "bee", "snail", "snail", "spider", "honey", "honey", "honey", "honey", "honey", "ash", "lizard", "lizard", "lizard", "bat", "adder", "adder", "newt", "melting", "cricket", "toad", "toad", "toad", "jagged", "torn", "tawny", "fawn", "hazel", "tawny", "fallow", "parsley", "pod", "leopard", "leopard", "shell", "shell", "bella", "alder", "bounce", "jump", "dancing", "hop", "crouch", "fidget", "slight", "fringe", "swift", "quick", "swift", "flail", "chasing", "running", "sloe", "sloe", "wild", "weed", "golden", "gorse", "gorse", "gorse", "gorse", "gorse", "gorse", "crooked", "storm", "copper", "silver", "silver", "silver", "silver", "silver", "silver", "silver", "silver", "sharp", "mallow", "mallow", "mallow", "jagged", "long", "shine", "jagged", "lightning", "lightning", "lightning", "lightning", "flash", "fallow", "fallow", "fallow", "sunny", "kestrel", "kestrel", "sparrow", "finch", "sparrow", "sparrow", "sparrow", "sparrow", "stag", "daisy", "daisy", "eagle", "rain", "rain", "rain", "rain", "rain", "rainswept", "rain", "rain", "rain", "rain", "snow", "snow", "snow", "snow", "blizzard", "blizzard", "snow", "snow", "ferret", "snow", "thunder", "hail", "mist", "misty", "misty", "fog", "mist", "mist", "mist", "frost", "frost", "dewy", "dew", "dew", "dew", "dew", "dew", "dew", "bark", "chive", "whisker", "shivering", "storm", "wind", "breeze", "wind", "fly", "fly", "fern", "fern", "fern", "tall", "tall", "bristle", "minnow", "fish", "perch", "perch", "fin", "eel", "eel", "trout", "trout", "trout", "bird", "bird", "bird", "egg", "kite", "song", "hoot", "song", "finch", "gull", "crow", "crow", "rook", "crow", "crow", "jackdaw", "duck", "dove", "dove", "dove", "dove", "goose", "goose", "quail", "quail", "quail", "quail", "wren", "wren", "buzzard", "heron", "heron", "hawk", "falcon", "hawk", "hawk", "hawk", "talon", "eagle", "hawk", "hawk", "hawk", "hawk", "eagle", "stork", "deer", "deer", "deer", "deer", "yellow", "russet", "yellow", "wasp", "bumble", "wasp", "dawn", "morning", "morning", "dawn", "dawn", "dawn", "black", "black", "dark", "dark", "black", "bramble", "bramble", "black", "dark", "rye", "rye", "daisy", "sage", "mouse", "mouse", "rat", "mouse", "mouse", "mouse", "shrew", "shrew", "weasel", "weasel", "mole", "mole", "turtle"
], suffixes_en=[
"eye", "whisker", "eye", "claw", "wing", "frost", "weed", "runner", "tail", "spots", "spots", "storm", "berry", "pelt", "berry", "splash", "wing", "wing", "song", "wing", "mist", "foot", "sky", "face", "heart", "whisker", "heart", "spirit", "leap", "light", "tail", "pounce", "spring", "fur", "leap", "leap", "flight", "flight", "feather", "wing", "leaf", "pelt", "tuft", "flower", "wing", "wing", "whisker", "tail", "tooth", "stone", "claw", "tooth", "face", "nose", "heart", "pelt", "tail", "moon", "shine", "heart", "heart", "fur", "foot", "feather", "bracken", "foot", "shine", "tail", "dapple", "pool", "shade", "storm", "foot", "brook", "moon", "belly", "cloud", "tooth", "song", "snout", "mist", "pelt", "fur", "fur", "whisker", "foot", "whisker", "fang", "claw", "sight", "cloud", "sky", "heart", "pelt", "fur", "mask", "wing", "whisper", "heart", "sky", "brook", "fox", "wing", "nose", "fur", "fur", "tail", "cloud", "step", "ear", "bird", "claw", "tail", "fur", "pelt", "muzzle", "shade", "fall", "step", "tail", "tail", "berry", "pounce", "shadow", "cloud", "pelt", "pelt", "breeze", "heart", "foot", "fawn", "tail", "tail", "step", "branch", "tail", "watcher", "eye", "breeze", "leaf", "leaf", "tail", "heart", "wish", "wish", "claw", "pelt", "pelt", "fur", "tuft", "pelt", "pelt", "foot", "foot", "nose", "nose", "tail", "feather", "strike", "shadow", "spots", "fall", "beam", "pelt", "fish", "flower", "flower", "tail", "cloud", "fire", "flower", "mist", "whisker", "pelt", "tail", "pelt", "flower", "foot", "fur", "water", "nose", "cloud", "tail", "fur", "pelt", "cloud", "bright", "river", "pelt", "flower", "shadow", "flower", "fur", "fur", "fur", "heart", "pelt", "pelt", "stone", "claw", "branch", "tail", "fall", "claw", "heart", "foot", "nose", "fur", "needle", "tail", "claw", "feather", "wing", "fur", "whisker", "flight", "whisker", "shade", "claw", "eyes", "eyes", "song", "fur", "whisker", "nose", "pelt", "wing", "shine", "pelt", "claw", "breeze", "nose", "tail", "stripe", "branch", "bark", "face", "fall", "claw", "willow", "heart", "fall", "nose", "tail", "fur", "fur", "tail", "wing", "tail", "feather", "fall", "nose", "leaf", "tail", "fur", "heart", "step", "fur", "pelt", "spring", "storm", "splash", "cloud", "gorse", "storm", "ripple", "stream", "cloud", "scar", "claw", "claw", "claw", "thorn", "fur", "puddle", "tooth", "shine", "sky", "ear", "tail", "pelt", "stream", "pelt", "shine", "heart", "storm", "pelt", "foot", "feather", "fur", "whisker", "heart", "pelt", "fern", "tail", "heart", "stripe", "fur", "fur", "pool", "wing", "wing", "wing", "foot", "heart", "pelt", "fire", "pelt", "hail", "fur", "talon", "foot", "haze", "foot", "fur", "wind", "tail", "nose", "tail", "tail", "flight", "claw", "speckle", "whisker", "whisker", "face", "fur", "feather", "leap", "leap", "heart", "leap", "claw", "whisker", "nose", "roar", "heart", "blaze", "eye", "heart", "step", "heart", "fang", "tail", "petal", "tail", "leaf", "claw", "moon", "briar", "claw", "tooth", "whisker", "nose", "pelt", "wing", "wing", "talon", "water", "foot", "minnow", "whisker", "throat", "tail", "tail", "tail", "claw", "tail", "berry", "water", "fang", "wing", "foot", "storm", "bird", "fur", "fur", "heart", "fur", "flower", "stem", "whisker", "wing", "wing", "wing", "wing", "tail", "claw", "tail", "fur", "pelt", "tail", "step", "song", "fur", "pelt", "stream", "tooth", "wing", "nose", "nose", "ice", "shadow", "pelt", "tree", "spring", "belly", "flight", "pelt", "eyes", "dawn", "tail", "shine", "tail", "claw", "willow", "claw", "scar", "thistle", "tail", "wing", "face", "tail", "branch", "pelt", "tail", "heart", "eyes", "flower", "whisker", "cloud", "dawn", "frost", "foot", "tail", "leaf", "tail", "storm", "pelt", "wing", "ear", "whisker", "claw", "bird", "tail", "tail", "nose", "shine", "shine", "tail", "tail", "claw", "feather", "whisker", "stem", "claw", "berry", "fur", "dust", "fur", "fall", "nose", "foot", "stem", "song", "leaf", "tail", "heart", "heart", "fur", "fire", "foot", "tail", "splash", "foot", "dusk", "dawn", "fur", "fur", "blossom", "frost", "leaf", "dust", "fur", "light", "claw", "pelt", "foot", "heart", "pelt", "slip", "pelt", "pad", "claw", "splash", "spot", "breeze", "pelt", "pelt", "moss", "creek", "whisker", "heart", "nose", "pool", "leaves", "dusk", "feather", "rain", "snow", "leaf", "fur", "whisker", "tail", "heart", "claw", "leaf", "whisker", "heart", "fur", "pelt", "pelt", "wing", "shade", "foot", "fur", "fur", "pelt", "tail", "pool", "heart", "claw", "fur", "pelt", "pelt", "tail", "tail", "tail", "tooth", "tooth", "tail", "leap", "pelt", "leg", "foot", "pelt", "wing", "whisker", "flight", "flight", "tail", "nose", "shell", "leaf", "tail", "fur", "pelt", "fern", "fur", "tail", "stripe", "fang", "ear", "fang", "speck", "ice", "step", "skip", "foot", "tooth", "ear", "spots", "step", "burrow", "pelt", "song", "seed", "light", "fur", "foot", "heart", "fur", "leaf", "heart", "fire", "foot", "leaf", "whisker", "foot", "flake", "foot", "whisker", "flight", "foot", "cloud", "storm", "fur", "fur", "fur", "whisker", "flower", "tail", "claw", "fur", "tail", "claw", "jaw", "stripe", "stream", "flame", "mask", "frost", "hawk", "claw", "tail", "fur", "nose", "peak", "tail", "cloud", "lightning", "tail", "tail", "stripe", "pelt", "nose", "fern", "tail", "wing", "flight", "tail", "pelt", "fur", "feather", "feather", "leap", "tail", "toe", "wing", "cloud", "splash", "storm", "fur", "fur", "flower", "flower", "fall", "leap", "whisker", "bush", "hare", "wing", "fur", "tuft", "claw", "bird", "step", "cloud", "foot", "water", "pelt", "feather", "mouse", "claw", "fur", "leaf", "spots", "spring", "nose", "petal", "nose", "face", "claw", "nose", "rose", "heart", "runner", "pelt", "flight", "whisker", "cloud", "stripe", "song", "tail", "poppy", "frost", "tail", "leap", "wing", "leap", "tail", "tail", "claw", "stream", "wing", "flight", "song", "scratch", "whisker", "bird", "flight", "swoop", "muzzle", "tail", "tail", "fur", "feather", "cry", "wing", "wing", "feather", "berry", "heart", "feather", "feather", "flight", "tail", "wing", "wing", "swoop", "swoop", "heart", "fur", "feather", "wing", "foot", "snow", "frost", "storm", "dapple", "foot", "leap", "fur", "fang", "tail", "stripe", "whisker", "stripe", "feather", "mist", "claw", "foot", "stripe", "ear", "claw", "berry", "bee", "whisker", "stalk", "whisker", "heart", "nose", "fur", "fang", "scar", "wing", "ear", "whisker", "foot", "fur", "whisker", "pelt", "whisker", "crawl"
], prefixes_cn=[
  "白", "一只", "一", "一", "乌木", "乌", "乌", "乌", "乳", "云", "云", "云", "云", "云", "云", "云", "云雀", "云雀", "云雀", "云雀", "云雀", "云", "亚麻", "亮", "亮", "夺", "亮", "光", "光", "光", "兔", "兔", "兔", "兔", "兔", "兔", "兔", "兔", "兔", "兔", "八哥", "八哥", "冬青", "冬青", "冬青", "冬青", "冬青", "冰", "冰", "冰", "冲", "冲", "击", "刺", "刺", "刺", "刺", "勇", "麻雀", "半", "半", "卵石", "卵石", "卵石", "卵石", "卷", "卷", "卷", "原鸽", "叶", "叶", "叶", "叶", "叶", "叶", "咕嘟", "哈利", "哈维", "响", "啁", "喷嚏", "噼啪", "回声", "回声", "回声", "团", "圆木", "圆石", "圣", "蹦", "坏", "坚果", "坚", "塔尖", "塔尖", "夜", "夜", "夜", "夜", "夜", "夜", "夜", "夜", "天", "晴", "天", "奔", "奔", "奔", "奔", "奶", "奶", "嫩枝", "丘", "小", "兔子", "冬青", "刺", "刺", "叶松", "叶松", "喀嚓", "夜", "天鹅", "孵", "小", "愿", "接骨木", "斑", "斑", "小", "晨", "杜松", "柳", "梅花", "槲鸫", "小", "沼泽", "沼泽", "滚", "灰", "烬", "烬", "燕雀", "祈", "绒", "网", "小", "花瓣", "苔藓", "蒲公英", "薄荷", "薄雾", "蝰蛇", "郁金香", "野", "金盏花", "闲", "雌狐", "雾", "霜", "露珠", "风铃", "飘", "飞", "鬃毛", "鱼", "鱼", "鲈鱼", "鹫", "小", "鹰", "鼬鼠", "尖嘴", "尖", "尖", "尘", "尘", "尘", "岩", "岩", "巨", "涟", "常春藤", "常春藤", "干草", "强", "高", "影", "影", "微", "微光", "微光", "微", "微风", "怪", "怯", "扇", "扑", "扑", "扑", "扭", "纽结", "护", "拱", "捷", "捷", "摆", "斑", "斑", "斑", "斑", "斑", "斑", "斑", "斑", "斑", "斑点", "斑点", "斑", "斑", "斑", "斑", "斑", "斑", "斑", "斑", "斑", "断", "断", "日", "日", "日", "日", "日", "日", "日", "明", "星", "春藤", "晨", "晨", "晨", "晨", "晨", "晴", "暗", "暗", "暗", "暗", "暗", "暗", "暮", "暮", "暮", "暮", "暴", "暴", "暴", "暴", "曙", "曙", "曙", "曙", "曙", "月", "月桂", "月", "木", "杂", "杂", "杉", "杉", "杉", "李", "杜松", "杜松", "杨柳", "杨", "松", "松", "松果", "松树", "松", "松", "松针", "松针", "松鸦", "松鸦", "松鸦", "松鼠", "松鼠", "松鼠", "林", "枫树", "枫", "枭", "枭", "枭", "枭", "枭", "枭", "枭", "柏", "柔", "柔", "柳", "柳", "柳", "柳", "柳", "柳", "栗", "栗", "栗", "栗", "根", "桃金娘", "桠", "桦", "桦", "桦", "桦树", "桦", "桦", "梅", "梅", "梅花", "梅花", "梨", "棕", "榉", "榉", "榉", "榉", "榉", "榛", "榛", "榛", "槲鸫", "樱", "樱桃", "樱桃", "樱桃", "樱草", "橄榄", "橡", "橡子", "橡子", "橡子", "橡", "橡", "橡", "橡", "残", "母鹿", "比利", "水獭", "池", "沙", "沙", "河", "沸", "沼", "沼泽", "沼", "波", "波", "泥", "泥", "泥", "泥", "泥", "泥", "泼", "洒", "洼", "浅", "海石竹", "涟", "涟", "涟", "清", "渡鸦", "湖", "湖", "湖", "湾", "湿", "溪", "滑", "滑", "火", "火", "火", "灯芯草", "灰", "灰", "灰", "灰", "灰", "灰", "灰", "灰", "灰鸽", "炭", "炭", "炽", "烁", "烈", "烟", "烟", "烟", "烟", "烟", "烟", "烬", "烬", "焦", "焦", "焰", "焰", "焰", "燕", "燕", "燕雀", "燕", "燕麦", "燕麦", "燕麦", "燕麦", "燕麦", "爪", "爪", "牛奶", "牝鹿", "牡鹿", "犬", "犬", "狐", "狐", "狐狸", "狐", "狐", "狮", "狮", "狮", "狮", "狮", "狼", "狼", "猞猁", "獭", "獾", "玫瑰", "玫瑰", "玳", "琥珀", "琥珀", "琥珀", "甜", "甜", "田鼠", "田鼠", "田鼠", "田鼠", "甲虫", "甲虫", "画眉", "画眉", "画眉", "画眉", "疾", "疾", "疾", "痣", "痣", "白", "白", "白", "白", "白", "白", "白杨", "白", "白", "白", "白", "白", "白", "白", "白釉", "白釉", "百合", "百合", "百合", "百合", "百合", "百合", "矛", "矛", "知更", "知更", "知更", "知更", "知更", "短", "石", "石", "石板", "石板", "石楠", "石楠", "石", "石", "石", "石", "石", "石", "砂", "砾", "砾", "碎", "碎", "碎石", "种子", "种", "空", "空", "空", "空", "籽", "粉", "紫", "紫衫", "紫罗兰", "红", "红", "红", "红", "红", "红", "红", "纹", "纹", "纹", "纹", "细", "细", "绒", "绵阳", "绽", "绿", "绿", "缠", "缠", "罂粟", "罂粟", "罂粟", "网", "羊", "羊齿", "羽", "羽", "羽", "羽", "羽", "羽", "羽", "羽", "翻", "翼", "耕", "肉桂", "胡桃", "臭鼬", "艾菊", "芦苇", "芦苇", "芦苇", "芦苇", "芦苇", "芦苇", "芦苇", "花", "花楸", "花楸", "花楸", "花楸", "花", "花瓣", "花瓣", "花瓣", "花瓣", "花", "花", "花蜜", "苔藓", "苔藓", "苔藓", "苔藓", "苔藓", "苔藓", "苔藓", "苔", "苜蓿", "苜蓿", "苜蓿", "苹果", "苹果", "苹果", "苹果", "苹果", "苹果", "苹果", "茎", "茴香", "茴香", "茶", "荆棘", "荆豆", "荆豆", "荆豆", "草", "草甸", "草甸", "草", "草", "荨麻", "荨麻", "荨麻", "荨麻", "荨麻", "荨麻", "荫", "荫", "荫", "莎草", "莎草", "莎草", "莓", "莓", "莱利", "落", "落", "落", "落", "落", "蓍", "蓝", "蓝", "蓟", "蓟", "蓟", "蓟", "蓟", "蔓", "蕨", "蕨叶", "蕨", "蕨", "蕨", "蕨", "蕨", "蕨", "蕨", "薄荷", "薄荷", "薄荷", "薰衣草", "藓", "藤", "藤", "虎", "虎", "蚁", "蚁", "蚁", "蛆", "蛇", "蛇", "蛇", "蛇", "蛙", "蛙", "蛛", "蛛", "蛛", "蛛", "蛾", "蛾", "蛾", "蛾", "蜂", "蜂", "蜗牛", "蜗牛", "蜘蛛", "蜜", "蜜", "蜜", "蜜", "蜜", "蜡", "蜥", "蜥蜴", "蜥蜴", "蝙蝠", "蝰蛇", "蝰蛇", "蝾螈", "融", "蟋蟀", "蟾", "蟾蜍", "蟾", "裂", "裂", "褐", "褐", "褐", "褐", "褐鹿", "西芹", "豆荚", "豹", "豹", "贝壳", "贝壳", "贝拉", "赤杨", "跳", "跳", "跹", "蹦", "蹲", "躁", "轻", "边", "迅", "迅", "迅", "连枷", "追", "追", "野李", "野李", "野", "野草", "金", "金雀", "金雀", "金雀", "金雀花", "金雀花", "金雀花", "钩", "暴", "铜", "银", "银", "银", "银", "银", "银", "银", "银", "锐", "锦葵", "锦葵", "锦葵", "锯", "长", "闪", "闪", "闪电", "闪电", "闪电", "闪电", "闪电", "闲", "闲", "闲", "阳光", "隼", "隼", "雀", "雀", "雀", "雀", "雀", "雀", "雄鹿", "雏菊", "雏菊", "雕", "雨", "雨", "雨", "雨", "雨", "雨", "雨", "雨", "雨", "雨", "雪", "雪", "雪", "雪", "雪暴", "雪暴", "雪", "雪", "雪貂", "雪", "雷", "雹", "雾", "雾", "雾", "雾", "雾", "雾", "雾", "雾", "雾", "露", "露", "露", "露", "露珠", "露", "露", "青", "韭", "须", "颤", "风", "风", "风", "风", "飞", "飞", "香薇", "香薇", "香薇", "高", "高", "鬃", "鱼", "鱼", "鲈", "鲈", "鳍", "鳗鱼", "鳗鱼", "鳟", "鳟", "鳟鱼", "鸟", "鸟", "鸟", "鸡蛋", "鸢", "鸣", "鸣", "鸣", "鸣鸟", "鸥", "鸦", "鸦", "鸦", "鸦", "鸦", "鸦", "鸭", "鸽", "鸽", "鸽", "鸽", "鹅", "鹅", "鹌鹑", "鹌鹑", "鹌鹑", "鹌鹑", "鹪鹩", "鹪鹩", "鹫", "鹫", "鹫", "鹰", "鹰", "鹰", "鹰", "鹰", "鹰爪", "鹰", "鹰", "鹰", "鹰", "鹰", "鹰", "鹳", "鹿", "鹿", "鹿", "鹿", "黄", "黄", "黄", "黄蜂", "黄蜂", "黄蜂", "黎明", "黎明", "黎明", "黎明", "黎明", "黎明", "黑", "黑", "黑", "黑", "黑", "黑莓", "黑莓", "黑", "黑", "黑麦", "黑麦", "黛西", "鼠尾草", "鼠", "鼠", "鼠", "鼠", "鼠", "鼠", "鼩", "鼩鼱", "鼬", "鼬", "鼹鼠", "鼹鼠", "龟"
], suffixes_cn=[
  "眼", "须", "眼", "掌", "翅", "霜", "草", "奔", "尾", "斑", "斑", "风", "果", "皮", "果", "斑", "翅", "翅", "鸣", "翅", "雾", "脚", "天", "脸", "心", "须", "心", "灵", "步", "光", "尾", "袭", "泉", "毛", "跳", "跳", "飞", "飞", "羽", "翅", "叶", "皮", "簇", "花", "翅", "翅", "须", "尾", "牙", "石", "掌", "牙", "脸", "鼻", "心", "皮", "尾", "月", "光", "心", "心", "毛", "脚", "羽", "蕨", "脚", "光", "尾", "斑", "池", "荫", "风", "脚", "溪", "月", "肚", "云", "牙", "歌", "吻", "雾", "皮", "毛", "毛", "须", "脚", "须", "牙", "掌", "望", "云", "天", "心", "皮", "毛", "罩", "翅", "语", "心", "天", "溪", "狐", "翅", "鼻", "毛", "毛", "尾", "云", "步", "耳", "鸟", "掌", "尾", "毛", "皮", "吻", "荫", "落", "步", "尾", "尾", "莓", "扑", "影", "云", "皮", "皮", "风", "心", "脚", "鹿", "尾", "尾", "步", "枝", "尾", "护", "眼", "风", "叶", "叶", "尾", "心", "愿", "愿", "掌", "皮", "皮", "毛", "簇", "皮", "皮", "脚", "脚", "鼻", "鼻", "尾", "羽", "光", "影", "斑", "落", "束", "皮", "鱼", "花", "花", "尾", "云", "火", "花", "雾", "须", "皮", "尾", "皮", "花", "脚", "毛", "水", "鼻", "云", "尾", "毛", "皮", "云", "光", "河", "皮", "花", "影", "花", "毛", "毛", "毛", "心", "皮", "皮", "石", "掌", "枝", "尾", "落", "掌", "心", "脚", "鼻", "毛", "针", "尾", "掌", "羽", "翅", "毛", "须", "飞", "须", "荫", "掌", "眼", "眼", "歌", "毛", "须", "鼻", "皮", "翅", "光", "皮", "掌", "风", "鼻", "尾", "条", "枝", "皮", "脸", "落", "掌", "柳", "心", "落", "鼻", "尾", "毛", "毛", "尾", "翅", "尾", "羽", "落", "鼻", "叶", "尾", "毛", "心", "步", "毛", "皮", "跃", "风", "斑", "云", "荆", "风", "波", "溪", "云", "疤", "掌", "掌", "掌", "棘", "毛", "潭", "齿", "光", "天", "耳", "尾", "皮", "溪", "皮", "光", "心", "暴", "皮", "脚", "羽", "毛", "须", "心", "皮", "蕨", "尾", "心", "条", "毛", "毛", "池", "翅", "翅", "翅", "脚", "心", "皮", "火", "皮", "雹", "毛", "爪", "脚", "霭", "足", "毛", "风", "尾", "鼻", "尾", "尾", "飞", "掌", "斑", "须", "须", "面", "毛", "羽", "跳", "跃", "心", "跃", "掌", "须", "鼻", "吼", "心", "焰", "眼", "心", "步", "心", "牙", "尾", "瓣", "尾", "叶", "掌", "月", "蔷薇", "掌", "齿", "须", "鼻", "皮", "翅", "翅", "钩", "水", "足", "鲦", "须", "喉", "尾", "尾", "尾", "掌", "尾", "莓", "水", "牙", "翅", "足", "暴", "鸟", "毛", "毛", "心", "毛", "花", "茎", "须", "翅", "翅", "翅", "翅", "尾", "掌", "尾", "毛", "皮", "尾", "步", "歌", "毛", "皮", "溪", "齿", "翅", "鼻", "鼻", "冰", "影", "皮", "树", "泉", "肚", "飞", "皮", "眼", "曙", "尾", "光", "尾", "掌", "柳", "掌", "疤", "蓟", "尾", "翅", "面", "尾", "枝", "皮", "尾", "心", "眼", "花", "须", "云", "曙", "霜", "足", "尾", "叶", "尾", "风", "皮", "翅", "耳", "须", "掌", "鸟", "尾", "尾", "鼻", "光", "光", "尾", "尾", "掌", "羽", "须", "茎", "掌", "果", "毛", "尘", "毛", "落", "鼻", "足", "茎", "歌", "叶", "尾", "心", "心", "毛", "火", "足", "尾", "斑", "足", "暮", "曙", "毛", "毛", "花", "霜", "叶", "尘", "毛", "光", "掌", "皮", "足", "心", "皮", "滑", "皮", "垫", "掌", "斑", "点", "风", "皮", "皮", "苔", "溪", "须", "心", "鼻", "池", "叶", "暮", "羽", "雨", "雪", "叶", "毛", "须", "尾", "心", "掌", "叶", "须", "心", "毛", "皮", "皮", "翅", "荫", "足", "毛", "毛", "皮", "尾", "池", "心", "掌", "毛", "皮", "皮", "尾", "尾", "尾", "牙", "牙", "尾", "跃", "皮", "足", "足", "皮", "翅", "须", "飞", "飞", "尾", "鼻", "壳", "叶", "尾", "毛", "皮", "蕨", "毛", "尾", "条", "牙", "耳", "牙", "斑", "冰", "步", "跳", "足", "牙", "耳", "斑", "步", "洞", "皮", "鸣", "籽", "光", "毛", "足", "心", "毛", "叶", "心", "火", "足", "叶", "须", "足", "雪片", "足", "须", "飞", "足", "云", "风", "毛", "毛", "毛", "须", "花", "尾", "掌", "毛", "尾", "掌", "嘴", "条", "溪", "焰", "罩", "霜", "鹰", "掌", "尾", "毛", "鼻", "峰", "尾", "云", "闪电", "尾", "尾", "条", "皮", "鼻", "蕨", "尾", "翅", "飞", "尾", "皮", "毛", "羽", "羽", "跃", "尾", "趾", "翅", "云", "斑", "风", "毛", "毛", "花", "花", "落", "跃", "须", "丛", "兔", "翅", "毛", "绺", "掌", "鸟", "步", "云", "足", "水", "皮", "羽", "鼠", "掌", "毛", "叶", "斑", "泉", "鼻", "瓣", "鼻", "面", "掌", "鼻", "玫", "心", "奔", "皮", "飞", "须", "云", "条", "之歌", "尾", "罂", "霜", "尾", "跃", "翅", "跃", "尾", "尾", "掌", "流", "翅", "飞", "鸣", "挠", "须", "鸟", "飞", "击", "鼻", "尾", "尾", "毛", "羽", "鸣", "翅", "翅", "羽", "果", "心", "羽", "羽", "飞", "尾", "翅", "翅", "击", "攫", "心", "毛", "羽", "翅", "足", "雪", "霜", "风", "斑", "足", "跃", "毛", "牙", "尾", "条", "须", "条", "羽", "雾", "掌", "足", "条", "耳", "掌", "莓", "蜂", "须", "秆", "须", "心", "鼻", "毛", "牙", "痕", "翅", "耳", "须", "脚", "毛", "须", "皮", "须", "爬"
])

const displayName = document.querySelector('#displayName');
displayName.innerHTML = cat1.generateName();
