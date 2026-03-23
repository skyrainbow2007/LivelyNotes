/**
 * 集成脚本 - 将新模块功能集成到现有HTML中
 * 使用方法：将此文件内容复制到 index.html 的 <script> 标签开头
 */

// ==================== 内联素材库数据（避免CORS问题）====================
var INLINE_MATERIAL_CONFIG = [
    {"id":"mat001","name":"贝多芬圆舞曲","associateStyle":["classic","folk"],"instrument":"钢琴","BPM":120,"key":"C大调","mood":"优雅","melodyFeature":"级进为主，音程不超过5度，节奏规整，三拍子特征明显，波浪形旋律线条","chordRule":"三和弦为主，和弦走向平稳，I-vi-IV-V进行（浪漫氛围公式）","emotionFormula":"romantic"},
    {"id":"mat002","name":"莫扎特钢琴奏鸣曲","associateStyle":["classic","piano"],"instrument":"钢琴","BPM":130,"key":"C大调","mood":"明快","melodyFeature":"快速音阶跑动，级进为主85%，音程不超过6度，节奏密集但规整","chordRule":"I-IV-V-I进行（阳光元气公式），属七和弦解决","emotionFormula":"sunshine"},
    {"id":"mat003","name":"莫扎特摇篮曲变奏","associateStyle":["ambient","piano"],"instrument":"钢琴","BPM":70,"key":"F大调","mood":"温柔","melodyFeature":"级进为主90%，音程不超过3度，节奏舒缓，重复动机明显，温柔的音程移动","chordRule":"I-vi-ii-V进行（治愈疗伤公式），和声稳定","emotionFormula":"healing"},
    {"id":"mat004","name":"海顿降E大调奏鸣曲","associateStyle":["classic","piano"],"instrument":"钢琴","BPM":120,"key":"Eb大调","mood":"庄重","melodyFeature":"级进与三度跳进结合75%，音程不超过5度，节奏规整，上行旋律线条","chordRule":"I-iii-IV-V进行（热血励志公式），偶尔使用ii和vi","emotionFormula":"inspiring"},
    {"id":"mat005","name":"海顿降E大调奏鸣曲2","associateStyle":["classic","cinematic"],"instrument":"钢琴","BPM":100,"key":"Eb大调","mood":"抒情","melodyFeature":"旋律线条流畅，级进为主80%，音程不超过5度，节奏平稳，波浪形轮廓","chordRule":"I-vi-IV-V进行（浪漫氛围公式），和声色彩丰富","emotionFormula":"romantic"},
    {"id":"mat006","name":"C大调幻想随想曲","associateStyle":["jazz","electronic"],"instrument":"钢琴","BPM":140,"key":"C大调","mood":"活泼","melodyFeature":"级进与跳进结合70%，音程不超过7度，节奏密集，装饰音丰富","chordRule":"ii-V-I进行（爵士质感公式），使用七和弦，半音过渡","emotionFormula":"jazz"},
    {"id":"mat007","name":"海顿D大调奏鸣曲","associateStyle":["pop","folk"],"instrument":"钢琴","BPM":120,"key":"D大调","mood":"欢快","melodyFeature":"级进为主70%，音程不超过6度，节奏明快，动机重复，记忆钩子明显","chordRule":"I-V-vi-IV进行（洗脑神曲公式），三和弦为主，循环进行","emotionFormula":"catchy"},
    {"id":"mat008","name":"莫扎特F大调小快板","associateStyle":["pop","piano"],"instrument":"钢琴","BPM":110,"key":"F大调","mood":"轻快","melodyFeature":"级进与小跳结合70%，音程不超过6度，节奏轻盈，附点节奏，动感十足","chordRule":"I-IV-vi-V进行（流行摇滚公式），和弦简单易记","emotionFormula":"popRock"},
    {"id":"mat009","name":"里赫特C大调奏鸣曲","associateStyle":["jazz","cinematic"],"instrument":"钢琴","BPM":100,"key":"C大调","mood":"深沉","melodyFeature":"旋律线条流畅，级进为主65%，音程不超过7度，节奏稳重，半音过渡","chordRule":"ii-V-I进行（爵士质感公式），使用属七和弦，丝滑过渡","emotionFormula":"jazz"},
    {"id":"mat010","name":"莫扎特摇篮曲","associateStyle":["ambient","folk"],"instrument":"钢琴","BPM":70,"key":"C大调","mood":"安静","melodyFeature":"级进为主95%，音程不超过3度，节奏简单，重复性强，极度温柔","chordRule":"I-vi-ii-V进行（治愈疗伤公式），和声极简","emotionFormula":"healing"},
    {"id":"mat011","name":"莫扎特第21钢琴协奏曲","associateStyle":["classic","cinematic"],"instrument":"钢琴","BPM":80,"key":"C大调","mood":"浪漫","melodyFeature":"旋律优美流畅，级进为主80%，音程不超过5度，节奏舒展，波浪形情感曲线","chordRule":"I-vi-IV-V进行（浪漫氛围公式），和弦色彩温暖","emotionFormula":"romantic"},
    {"id":"mat012","name":"莫扎特C大调奏鸣曲","associateStyle":["pop","classic"],"instrument":"钢琴","BPM":120,"key":"C大调","mood":"明朗","melodyFeature":"级进与三度跳进结合70%，音程不超过6度，节奏清晰，记忆钩子强","chordRule":"I-V-vi-IV进行（洗脑神曲公式），和声明快","emotionFormula":"catchy"},
    {"id":"mat013","name":"R&B灵魂示范","associateStyle":["jazz","pop"],"instrument":"钢琴","BPM":90,"key":"C大调","mood":"灵魂","melodyFeature":"级进为主70%，音程不超过7度，装饰音丰富，切分节奏，转音明显","chordRule":"I-IV-ii-V进行（R&B灵魂公式），小七和弦延伸","emotionFormula":"rnb"},
    {"id":"mat014","name":"梦幻氛围示范","associateStyle":["ambient","electronic"],"instrument":"合成器","BPM":80,"key":"Am大调","mood":"梦幻","melodyFeature":"级进为主85%，音程不超过5度，节奏舒缓，延长音多，空灵感强","chordRule":"I-iii-vi-IV进行（梦幻情绪公式），连续小调和弦","emotionFormula":"dreamy"},
    {"id":"mat015","name":"励志突破示范","associateStyle":["pop","cinematic"],"instrument":"钢琴","BPM":140,"key":"G大调","mood":"励志","melodyFeature":"级进为主75%，音程不超过6度，节奏密集，逐渐推向高潮，强有力结束","chordRule":"I-iii-IV-V进行（热血励志公式），正能量满满","emotionFormula":"inspiring"}
];

// ==================== 素材库分析器（内联版本）====================
// 使用不同的变量名避免冲突
var optimizedMaterialConfig = null;
var optimizedMaterialFeatures = {};

async function initMaterialLibrary() {
    try {
        // 优先使用内联数据（避免CORS问题）
        if (INLINE_MATERIAL_CONFIG && INLINE_MATERIAL_CONFIG.length > 0) {
            optimizedMaterialConfig = INLINE_MATERIAL_CONFIG;
            console.log(`✓ 使用内联素材库：${optimizedMaterialConfig.length}个素材`);
            buildFeatureLibrary();
            return true;
        }
        
        // 尝试从已有的materialConfig读取（如果index.html已加载）
        if (typeof materialConfig !== 'undefined' && materialConfig) {
            optimizedMaterialConfig = materialConfig;
            console.log(`✓ 使用已加载的素材库：${optimizedMaterialConfig.length}个素材`);
            buildFeatureLibrary();
            return true;
        }
        
        // 最后尝试fetch加载
        const response = await fetch('素材库/material-config.json');
        if (!response.ok) {
            console.warn('素材库配置文件未找到，使用默认配置');
            return false;
        }
        
        optimizedMaterialConfig = await response.json();
        console.log(`✓ 素材库加载成功：${optimizedMaterialConfig.length}个素材`);
        
        buildFeatureLibrary();
        return true;
    } catch (error) {
        console.warn('素材库初始化失败，将使用原生算法:', error);
        return false;
    }
}

function buildFeatureLibrary() {
    if (!optimizedMaterialConfig) return;
    
    optimizedMaterialFeatures = {};
    
    optimizedMaterialConfig.forEach(material => {
        material.associateStyle.forEach(style => {
            if (!optimizedMaterialFeatures[style]) {
                optimizedMaterialFeatures[style] = [];
            }
            
            const features = extractFeaturesFromConfig(material);
            optimizedMaterialFeatures[style].push(features);
        });
    });
    
    console.log('✓ 风格特征库构建完成:', Object.keys(optimizedMaterialFeatures));
}

function extractFeaturesFromConfig(material) {
    const melodyDesc = material.melodyFeature || '';
    
    let maxInterval = 5;
    if (melodyDesc.includes('不超过3度')) maxInterval = 3;
    else if (melodyDesc.includes('不超过4度')) maxInterval = 4;
    else if (melodyDesc.includes('不超过5度')) maxInterval = 5;
    else if (melodyDesc.includes('不超过6度')) maxInterval = 6;
    else if (melodyDesc.includes('八度')) maxInterval = 12;
    else if (melodyDesc.includes('音程范围广')) maxInterval = 10;
    
    let stepwiseRatio = 0.7;
    if (melodyDesc.includes('级进为主')) stepwiseRatio = 0.8;
    if (melodyDesc.includes('快速音阶')) stepwiseRatio = 0.85;
    if (melodyDesc.includes('跳进')) stepwiseRatio = 0.6;
    
    let rhythmDensity = 'medium';
    if (material.BPM >= 140) rhythmDensity = 'high';
    else if (material.BPM <= 80) rhythmDensity = 'low';
    
    let rhythmPattern = ['4n', '8n', '2n'];
    if (melodyDesc.includes('节奏密集') || melodyDesc.includes('快速')) {
        rhythmPattern = ['8n', '16n', '4n'];
    } else if (melodyDesc.includes('舒缓') || melodyDesc.includes('简单')) {
        rhythmPattern = ['4n', '2n'];
    } else if (melodyDesc.includes('附点')) {
        rhythmPattern = ['4n', '8n', '4n.', '8n.'];
    }
    
    const chordDesc = material.chordRule || '';
    let chordComplexity = 'simple';
    if (chordDesc.includes('复杂') || chordDesc.includes('七和弦')) {
        chordComplexity = 'complex';
    } else if (chordDesc.includes('丰富')) {
        chordComplexity = 'medium';
    }
    
    return {
        id: material.id,
        name: material.name,
        key: material.key,
        bpm: material.BPM,
        mood: material.mood,
        maxInterval: maxInterval,
        stepwiseRatio: stepwiseRatio,
        melodicContour: melodyDesc.includes('上行') ? 'ascending' : 
                        melodyDesc.includes('下行') ? 'descending' : 'wave',
        rhythmDensity: rhythmDensity,
        rhythmPattern: rhythmPattern,
        bpmRange: [material.BPM - 20, material.BPM + 20],
        chordComplexity: chordComplexity,
        chordTonePreference: chordComplexity === 'simple' ? 0.8 : 0.6,
        styles: material.associateStyle
    };
}

function getFeaturesByStyle(style) {
    if (!optimizedMaterialFeatures || Object.keys(optimizedMaterialFeatures).length === 0) {
        return null;
    }
    
    const styleFeatures = optimizedMaterialFeatures[style];
    
    if (!styleFeatures || styleFeatures.length === 0) {
        console.log(`风格 "${style}" 无匹配素材，使用原生算法`);
        return null;
    }
    
    const selectedFeature = styleFeatures[Math.floor(Math.random() * styleFeatures.length)];
    console.log(`✓ 匹配素材: ${selectedFeature.name} (${style}风格)`);
    
    return selectedFeature;
}

// ==================== 旋律优化器（内联版本 - 高质量音乐理论算法）====================
function generateOptimizedMelody(key, bars, timeSig, complexity, progression, materialFeatures) {
    if (!materialFeatures) {
        return null;
    }

    const config = complexityConfig[complexity];
    const notes = [];
    // 6/8 统一折算为 3 个四分音符单位，与 generateBasicMelody 保持一致
    const beatsPerBar = timeSig === '6/8' ? 3 : (parseInt(timeSig.split('/')[0]) || 4);
    let currentBeat = 0;

    const scale = scaleNotes[key] || scaleNotes.C;

    const optimizedParams = {
        maxInterval: materialFeatures.maxInterval || 5,
        stepwiseRatio: Math.max(materialFeatures.stepwiseRatio || 0.75, 0.7),
        chordTonePreference: materialFeatures.chordTonePreference || 0.8,
        rhythmDensity: materialFeatures.rhythmDensity || 'medium',
        melodicContour: materialFeatures.melodicContour || 'wave'
    };

    console.log('✓ 使用优化参数:', optimizedParams);

    // ====== 按拍号严格约束的合法节奏型池 ======
    const RHYTHM_POOLS = {
        '4/4': {
            default: [[1,1,1,1],[1,0.5,0.5,1,1],[0.5,0.5,1,1,1],[2,1,1],[1,1,2],[2,2],[1.5,0.5,1,1]],
            high:    [[0.5,0.5,1,1,1],[0.5,0.5,0.5,0.5,1,1],[1,0.5,0.5,1,1]],
            low:     [[2,2],[4],[1,1,2],[1.5,0.5,2]]
        },
        '3/4': {
            default: [[1,1,1],[1.5,0.5,1],[1,1.5,0.5],[1,2],[3]],
            high:    [[1,1,1],[0.5,0.5,1,1],[0.5,0.5,0.5,0.5,0.5,0.5]],
            low:     [[3],[1,2],[1.5,1.5]]
        },
        '2/4': {
            default: [[1,1],[0.5,0.5,1],[1,0.5,0.5],[2],[1.5,0.5]],
            high:    [[0.5,0.5,1],[0.5,0.5,0.5,0.5]],
            low:     [[2],[1,1]]
        },
        '6/8': {
            default: [[1.5,1.5],[0.5,0.5,0.5,0.5,0.5,0.5],[1,0.5,1,0.5],[1.5,0.5,0.5,0.5]],
            high:    [[0.5,0.5,0.5,0.5,0.5,0.5],[1,0.5,1,0.5]],
            low:     [[3],[1.5,1.5]]
        }
    };

    const poolKey = timeSig in RHYTHM_POOLS ? timeSig : '4/4';
    const densityKey = optimizedParams.rhythmDensity === 'high' ? 'high' :
                       optimizedParams.rhythmDensity === 'low'  ? 'low'  : 'default';
    const stylePool = RHYTHM_POOLS[poolKey][densityKey] || RHYTHM_POOLS[poolKey].default;
    // 严格过滤：节奏型总拍数必须等于 beatsPerBar
    const validRhythmPool = stylePool.filter(
        r => Math.abs(r.reduce((a, b) => a + b, 0) - beatsPerBar) < 0.01
    );
    const fallbackRhythm = timeSig === '6/8'
        ? [0.5, 0.5, 0.5, 0.5, 0.5, 0.5]
        : Array(beatsPerBar).fill(1);

    // 四分音符单位拍数 → Tone.js 时值字符串
    function beatsToRhythmStr(b) {
        const t = Math.round(b * 100) / 100;
        if (t >= 4)    return '1n';
        if (t >= 3)    return '2n.';
        if (t >= 2)    return '2n';
        if (t >= 1.5)  return '4n.';
        if (t >= 1)    return '4n';
        if (t >= 0.75) return '8n.';
        if (t >= 0.5)  return '8n';
        return '16n';
    }

    // 强拍判断
    function isStrongBeatFn(beatInBar, timeSig) {
        const b = Math.round(beatInBar * 100) / 100;
        if (timeSig === '6/8') return b === 0 || b === 1.5;
        if (timeSig === '3/4') return b === 0;
        if (timeSig === '2/4') return b === 0;
        return b === 0 || b === 2;
    }

    const contour = generateMelodicContourEnhanced(bars, optimizedParams.melodicContour);
    let lastNote = null;
    let consecutiveLeaps = 0;

    for (let bar = 0; bar < bars; bar++) {
        const chord = progression[bar] || 'C';
        const chordTonesList = chordNotes[chord] || ['C', 'E', 'G'];
        const targetOctave = contour[bar] || 4;

        // 选一个严格合法的节奏型
        const barRhythms = validRhythmPool.length > 0
            ? validRhythmPool[Math.floor(Math.random() * validRhythmPool.length)]
            : fallbackRhythm;

        let beatInBar = 0;
        for (let i = 0; i < barRhythms.length; i++) {
            const durationInBeats = barRhythms[i];
            const rhythm = beatsToRhythmStr(durationInBeats);
            const isStrong = (i === 0) || isStrongBeatFn(beatInBar, timeSig);

            // 生成音高（严格在调式音阶内）
            let noteName;
            if (lastNote && Math.random() < optimizedParams.stepwiseRatio) {
                // 用音阶内步进，永远不产生调外音
                noteName = (typeof generateStepwiseNoteInScale === 'function')
                    ? generateStepwiseNoteInScale(lastNote, scale, targetOctave, 2)
                    : _stepwiseInScaleLocal(lastNote, scale, targetOctave, 2);
                consecutiveLeaps = 0;
            } else {
                const useChordTone = isStrong
                    ? Math.random() < (optimizedParams.chordTonePreference + 0.1)
                    : Math.random() < optimizedParams.chordTonePreference;
                if (useChordTone) {
                    // 只取音阶内的和弦音
                    const validChordTones = chordTonesList.filter(t => scale.includes(t));
                    const pool = validChordTones.length > 0 ? validChordTones : scale;
                    noteName = pool[Math.floor(Math.random() * pool.length)] + targetOctave;
                } else {
                    noteName = scale[Math.floor(Math.random() * scale.length)] + targetOctave;
                }
                if (lastNote) {
                    const intv = getInterval(lastNote, noteName);
                    if (intv > optimizedParams.maxInterval) {
                        noteName = (typeof generateStepwiseNoteInScale === 'function')
                            ? generateStepwiseNoteInScale(lastNote, scale, targetOctave, 2)
                            : _stepwiseInScaleLocal(lastNote, scale, targetOctave, 2);
                    }
                    if (intv > 5) {
                        consecutiveLeaps++;
                        if (consecutiveLeaps >= 2) {
                            noteName = (typeof generateStepwiseNoteInScale === 'function')
                                ? generateStepwiseNoteInScale(lastNote, scale, targetOctave, 2)
                                : _stepwiseInScaleLocal(lastNote, scale, targetOctave, 2);
                            consecutiveLeaps = 0;
                        }
                    } else {
                        consecutiveLeaps = 0;
                    }
                }
            }
            // 最终保障：强制吸附到调式音阶
            noteName = (typeof snapToScale === 'function')
                ? snapToScale(noteName, scale)
                : _snapToScaleLocal(noteName, scale);

            // 音域限制
            const oct = parseInt(noteName.match(/\d+/)?.[0] || '4');
            if (oct < 3) noteName = noteName.replace(/\d+/, '3');
            else if (oct > 5) noteName = noteName.replace(/\d+/, '5');

            notes.push({
                name: noteName,
                duration: rhythm,
                durationInBeats: durationInBeats,
                beat: currentBeat,
                chord: chord,
                strongBeat: isStrong,
                isChordTone: isChordTone(noteName, chord, key)
            });

            lastNote = noteName;
            // 用精确四舍五入消除浮点累加误差
            currentBeat = Math.round((currentBeat + durationInBeats) * 10000) / 10000;
            beatInBar   = Math.round((beatInBar   + durationInBeats) * 10000) / 10000;
        }
    }

    // 确保结束在和弦内音（完满终止）
    if (notes.length > 0) {
        const lastChord = progression[bars - 1] || 'C';
        const lastChordTones = chordNotes[lastChord] || ['C', 'E', 'G'];
        const lastNoteObj = notes[notes.length - 1];
        if (!lastNoteObj.isChordTone) {
            const octave = lastNoteObj.name.match(/\d+/)?.[0] || '4';
            lastNoteObj.name = lastChordTones[0] + octave;
            lastNoteObj.isChordTone = true;
        }
    }

    return notes;
}

// 本地版 snapToScale（确保 integration.js 独立可用，不依赖 index.html 的定义顺序）
function _snapToScaleLocal(noteName, scale) {
    if (!noteName || !scale) return noteName;
    const match = noteName.match(/^([A-G][#b]*)(\d+)$/);
    if (!match) return noteName;
    const noteLetter = match[1];
    const octave = match[2];
    if (scale.includes(noteLetter)) return noteName;
    const noteNames = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
    const normalizeMap = {'Db':'C#','Eb':'D#','Gb':'F#','Ab':'G#','Bb':'A#'};
    const normalized = normalizeMap[noteLetter] || noteLetter;
    const noteIdx = noteNames.indexOf(normalized);
    let bestNote = scale[0], bestDist = 12;
    scale.forEach(sn => {
        const snNorm = normalizeMap[sn] || sn;
        const snIdx = noteNames.indexOf(snNorm);
        const dist = Math.min(Math.abs(snIdx - noteIdx), 12 - Math.abs(snIdx - noteIdx));
        if (dist < bestDist) { bestDist = dist; bestNote = sn; }
    });
    return bestNote + octave;
}

// 本地版音阶内步进（integration.js 独立使用）
function _stepwiseInScaleLocal(lastNote, scale, targetOctave, maxStep) {
    const match = lastNote.match(/^([A-G][#b]*)(\d+)$/);
    if (!match) return scale[0] + targetOctave;
    const noteLetter = match[1];
    let scaleIdx = scale.indexOf(noteLetter);
    if (scaleIdx === -1) {
        const snapped = _snapToScaleLocal(lastNote, scale);
        const snMatch = snapped.match(/^([A-G][#b]*)(\d+)$/);
        scaleIdx = snMatch ? scale.indexOf(snMatch[1]) : 0;
        if (scaleIdx === -1) scaleIdx = 0;
    }
    const maxS = maxStep || 2;
    const steps = [];
    for (let s = -maxS; s <= maxS; s++) if (s !== 0) steps.push(s);
    const weighted = [...steps, ...steps.filter(s => Math.abs(s)===1), ...steps.filter(s => Math.abs(s)===1)];
    const step = weighted[Math.floor(Math.random() * weighted.length)];
    let newIdx = scaleIdx + step;
    let newOctave = targetOctave;
    while (newIdx < 0) { newIdx += scale.length; newOctave--; }
    while (newIdx >= scale.length) { newIdx -= scale.length; newOctave++; }
    if (newOctave < 3) newOctave = 3;
    if (newOctave > 5) newOctave = 5;
    return scale[newIdx] + newOctave;
}

// 增强版旋律轮廓生成
function generateMelodicContourEnhanced(bars, contourType = 'wave') {
    const contour = [];
    const peak = Math.floor(bars * 0.618);  // 黄金分割点
    
    if (contourType === 'ascending') {
        // 上行：逐渐升高
        for (let i = 0; i < bars; i++) {
            contour.push(3 + Math.min(Math.floor(i / (bars / 2)), 2));
        }
    } else if (contourType === 'descending') {
        // 下行：逐渐降低
        for (let i = 0; i < bars; i++) {
            contour.push(5 - Math.min(Math.floor(i / (bars / 2)), 2));
        }
    } else {
        // 波浪形（默认）：起承转合
        for (let i = 0; i < bars; i++) {
            if (i < peak) {
                // 上升阶段
                contour.push(4 + Math.floor((i / peak) * 1));
            } else {
                // 下降阶段
                contour.push(5 - Math.floor(((i - peak) / (bars - peak)) * 1));
            }
        }
    }
    
    return contour;
}

// 增强版智能节奏选择
function selectRhythmEnhanced(rhythmPattern, noteIndex, totalNotes, beatsPerBar, currentBeat) {
    const beatInBar = currentBeat % beatsPerBar;
    
    // 强拍倾向使用较长音符
    if (beatInBar === 0 && rhythmPattern.includes('4n')) {
        return Math.random() < 0.65 ? '4n' : rhythmPattern[Math.floor(Math.random() * rhythmPattern.length)];
    }
    
    // 小节最后一个音符倾向使用较长音符
    if (noteIndex === totalNotes - 1) {
        if (rhythmPattern.includes('2n') && Math.random() < 0.5) {
            return '2n';
        } else if (rhythmPattern.includes('4n')) {
            return '4n';
        }
    }
    
    // 避免过多16分音符（保持旋律清晰）
    if (rhythmPattern.includes('16n') && Math.random() > 0.25) {
        const filtered = rhythmPattern.filter(r => r !== '16n');
        if (filtered.length > 0) {
            return filtered[Math.floor(Math.random() * filtered.length)];
        }
    }
    
    return rhythmPattern[Math.floor(Math.random() * rhythmPattern.length)];
}

// 增强版级进音符生成
function generateStepwiseNoteEnhanced(lastNote, scale, targetOctave, maxStep = 2) {
    const steps = [];
    for (let i = -maxStep; i <= maxStep; i++) {
        if (i !== 0) steps.push(i);
    }
    
    // 倾向于小的级进（二度）
    const weightedSteps = [
        ...steps, 
        ...steps.filter(s => Math.abs(s) === 1),  // 二度出现2次
        ...steps.filter(s => Math.abs(s) === 1)   // 二度再出现1次
    ];
    const step = weightedSteps[Math.floor(Math.random() * weightedSteps.length)];
    
    let newNote = transposeNote(lastNote, step);
    
    // 确保在合理音域内
    const octave = parseInt(newNote.match(/\d+/)?.[0] || '4');
    if (octave < 3) {
        newNote = newNote.replace(/\d+/, '3');
    } else if (octave > 5) {
        newNote = newNote.replace(/\d+/, '5');
    }
    
    return newNote;
}

// 增强版大音程修正
function correctLargeIntervalEnhanced(lastNote, currentNote, maxInterval, scale, targetOctave) {
    const interval = getInterval(lastNote, currentNote);
    
    if (interval <= maxInterval) {
        return currentNote;
    }
    
    // 使用级进方式接近目标音
    const direction = noteToMidi(currentNote) > noteToMidi(lastNote) ? 1 : -1;
    const step = Math.min(maxInterval, 3);
    
    return transposeNote(lastNote, direction * step);
}

// 辅助函数：获取时值对应的拍数
function getDurationInBeats(rhythm) {
    switch(rhythm) {
        case '1n': return 4;
        case '2n': return 2;
        case '4n': return 1;
        case '8n': return 0.5;
        case '16n': return 0.25;
        case '8n.': return 0.75;
        case '4n.': return 1.5;
        default: return 1;
    }
}

// 辅助函数：计算两个音符之间的音程（半音数）
function getInterval(note1, note2) {
    const midi1 = noteToMidi(note1);
    const midi2 = noteToMidi(note2);
    return Math.abs(midi2 - midi1);
}

// 辅助函数：将音符转换为MIDI音高
function noteToMidi(noteName) {
    const match = noteName.match(/^([A-G])([#b]?)(\d)$/);
    if (!match) return 60;
    
    const noteLetter = match[1];
    const accidental = match[2] || '';
    const octave = parseInt(match[3]);
    
    const noteValues = {'C':0, 'D':2, 'E':4, 'F':5, 'G':7, 'A':9, 'B':11};
    let midiNote = noteValues[noteLetter] + (octave + 1) * 12;
    
    if (accidental === '#') midiNote += 1;
    if (accidental === 'b') midiNote -= 1;
    
    return midiNote;
}

// 辅助函数：检查是否为和弦内音
function isChordTone(noteName, chord, key) {
    if (!noteName || !chord) return false;
    
    const note = noteName.replace(/\d/, '');
    const chordTones = chordNotes[chord] || chordNotes[key] || chordNotes['C'];
    
    if (!chordTones) return false;
    
    // 简化比较：忽略升降号差异
    const normalizeNote = (n) => n.replace(/[#b]/, '');
    const baseNote = normalizeNote(note);
    
    return chordTones.some(tone => {
        const baseTone = normalizeNote(tone);
        return baseTone === baseNote;
    });
}

// 辅助函数：移调音符
function transposeNote(note, semitones) {
    const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const regex = /([A-G]#?b?)(\d+)/;
    const match = note.match(regex);
    
    if (!match) return note;
    
    let name = match[1];
    let octave = parseInt(match[2]);
    
    // 标准化音名
    const normalizedNames = {
        'Db': 'C#', 'Eb': 'D#', 'Gb': 'F#', 'Ab': 'G#', 'Bb': 'A#',
        'Cb': 'B', 'Fb': 'E', 'E#': 'F', 'B#': 'C'
    };
    
    if (normalizedNames[name]) {
        name = normalizedNames[name];
    }
    
    let index = noteNames.indexOf(name);
    if (index === -1) return note;
    
    index += semitones;
    
    // 处理八度变化
    while (index < 0) {
        index += 12;
        octave -= 1;
    }
    while (index >= 12) {
        index -= 12;
        octave += 1;
    }
    
    return noteNames[index] + octave;
}

function getInterval(note1, note2) {
    const midi1 = noteToMidi(note1);
    const midi2 = noteToMidi(note2);
    return Math.abs(midi2 - midi1);
}

function noteToMidi(noteName) {
    const match = noteName.match(/^([A-G])([#b]?)(\d)$/);
    if (!match) return 60;
    
    const noteLetter = match[1];
    const accidental = match[2] || '';
    const octave = parseInt(match[3]);
    
    const noteValues = {'C':0, 'D':2, 'E':4, 'F':5, 'G':7, 'A':9, 'B':11};
    let midiNote = noteValues[noteLetter] + (octave + 1) * 12;
    
    if (accidental === '#') midiNote += 1;
    if (accidental === 'b') midiNote -= 1;
    
    return midiNote;
}

// ==================== 页面加载时初始化 ====================
window.addEventListener('DOMContentLoaded', async function() {
    console.log('🎵 灵动音符 - AI智能音乐生成系统启动中...');
    
    try {
        const initialized = await initMaterialLibrary();
        
        if (initialized) {
            console.log('✓ 素材库优化已启用');
            if (typeof showNotification === 'function') {
                showNotification('✓ 素材库已加载，旋律生成已优化', 'success');
            }
        } else {
            console.log('⚠ 使用原生算法');
        }
    } catch (error) {
        console.error('素材库初始化失败:', error);
    }
});

// 如果页面已经加载完成，立即初始化
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(async () => {
        console.log('🎵 灵动音符 - AI智能音乐生成系统启动中...');
        
        try {
            const initialized = await initMaterialLibrary();
            
            if (initialized) {
                console.log('✓ 素材库优化已启用');
                if (typeof showNotification === 'function') {
                    showNotification('✓ 素材库已加载，旋律生成已优化', 'success');
                }
            } else {
                console.log('⚠ 使用原生算法');
            }
        } catch (error) {
            console.error('素材库初始化失败:', error);
        }
    }, 100);
}














