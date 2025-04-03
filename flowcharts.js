document.addEventListener('DOMContentLoaded', function() {
    // Create Nike refund flowchart if element exists
    const nikeFlowchart = document.getElementById('nikeFlowchart') || document.getElementById('nikeRefundFlowchart');
    if (nikeFlowchart) {
        const nikeFlow = new Chart(nikeFlowchart, {
            type: 'bar',
            data: {
                datasets: [{
                    backgroundColor: 'rgba(245, 100, 0, 0.2)',
                    borderColor: 'rgba(245, 100, 0, 1)',
                    borderWidth: 1,
                    data: [{
                        id: 'start',
                        label: 'Problem with Nike Superfly 10',
                        details: 'Nike offers comprehensive return policy\nand 2-year warranty coverage',
                        next: 'within30'
                    }, {
                        id: 'within30',
                        label: 'Within 30 days of purchase?',
                        details: 'Nike\'s standard return window: 30 days\nNike+ members get 60-day window',
                        next: ['yes30', 'no30']
                    }, {
                        id: 'yes30',
                        label: 'YES: Eligible for full refund',
                        details: 'Full refund on unworn items\nUsed items evaluated case-by-case',
                        next: 'receipt'
                    }, {
                        id: 'no30',
                        label: 'NO: Check warranty policy',
                        details: '2-year manufacturing defect warranty\nCovers material & construction issues',
                        next: 'contact'
                    }, {
                        id: 'receipt',
                        label: 'Have original receipt?',
                        details: 'Receipt can be paper or digital\nEmail confirmation is acceptable',
                        next: ['yesReceipt', 'noReceipt']
                    }, {
                        id: 'yesReceipt',
                        label: 'YES: Return to store for refund',
                        details: 'Bring cleats in original packaging\nif possible for faster processing',
                        next: 'original'
                    }, {
                        id: 'noReceipt',
                        label: 'NO: Store credit may be offered',
                        details: 'ID may be required\nLimited to one no-receipt return per year',
                        next: 'original'
                    }, {
                        id: 'original',
                        label: 'Original payment method?',
                        details: 'Credit/debit cards: 3-5 business days\nOther methods may vary in timing',
                        next: ['yesPay', 'noPay']
                    }, {
                        id: 'yesPay',
                        label: 'YES: Refund to original payment',
                        details: 'Full refund including original tax\nand shipping costs (if applicable)',
                        next: 'end'
                    }, {
                        id: 'noPay',
                        label: 'NO: Store credit/gift card issued',
                        details: 'Valid at any Nike retail location\nor Nike.com with no expiration date',
                        next: 'end'
                    }, {
                        id: 'contact',
                        label: 'Contact Nike Customer Service',
                        details: 'Phone: 1-800-806-6453\nEmail: service@nike.com',
                        next: 'defective'
                    }, {
                        id: 'defective',
                        label: 'Manufacturing defect claim?',
                        details: 'Separation of materials, stitching issues,\nor premature breakdown qualifies',
                        next: ['yesDefect', 'noDefect']
                    }, {
                        id: 'yesDefect',
                        label: 'YES: Submit warranty review',
                        details: 'Provide photos of defect\nand proof of purchase for evaluation',
                        next: 'decision'
                    }, {
                        id: 'noDefect',
                        label: 'NO: No refund available',
                        details: 'Normal wear and tear\nor misuse not covered',
                        next: 'end'
                    }, {
                        id: 'decision',
                        label: 'Nike warranty evaluation',
                        details: 'Typical review takes 5-7 business days\nfor final determination',
                        next: ['approved', 'denied']
                    }, {
                        id: 'approved',
                        label: 'APPROVED: Replacement/credit',
                        details: 'Product replacement or store credit\nat current retail value',
                        next: 'end'
                    }, {
                        id: 'denied',
                        label: 'DENIED: No refund provided',
                        details: 'Appeal available within 30 days\nwith additional evidence',
                        next: 'end'
                    }, {
                        id: 'end',
                        label: 'Process Complete',
                        details: 'Customer satisfaction survey\nmay be sent via email',
                    }]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: 'Nike Refund Process Flowchart',
                        font: {
                            size: 18,
                            weight: 'bold'
                        },
                        color: 'rgba(245, 100, 0, 1)',
                        padding: {
                            top: 10,
                            bottom: 30
                        }
                    },
                    flowchart: {
                        fillOpacity: 0.9
                    },
                    tooltip: {
                        enabled: true,
                        displayColors: false,
                        callbacks: {
                            label: function(context) {
                                return context.raw.details ? context.raw.details.split('\n') : '';
                            },
                            title: function(context) {
                                return context[0].raw.label;
                            }
                        }
                    }
                },
                animation: {
                    duration: 800,
                    easing: 'easeOutQuart'
                },
                layout: {
                    padding: {
                        top: 20,
                        right: 40,
                        bottom: 40,
                        left: 40
                    }
                }
            },
            plugins: [{
                id: 'flowchart',
                beforeDraw: function(chart) {
                    const ctx = chart.ctx;
                    const data = chart.data.datasets[0].data;
                    const chartArea = chart.chartArea;
                    const width = chartArea.right - chartArea.left;
                    const height = chartArea.bottom - chartArea.top;
                    const boxWidth = 220;
                    const boxHeight = 60;
                    
                    ctx.save();
                    
                    // Add gradient background
                    const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
                    gradient.addColorStop(0, 'rgba(30, 30, 30, 0.05)');
                    gradient.addColorStop(1, 'rgba(30, 30, 30, 0.01)');
                    
                    // Clear the canvas
                    ctx.clearRect(0, 0, chart.width, chart.height);
                    
                    // Draw background
                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, chart.width, chart.height);
                    
                    // Add a subtle grid pattern
                    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
                    ctx.lineWidth = 0.5;
                    
                    for (let i = 0; i < chart.width; i += 40) {
                        ctx.beginPath();
                        ctx.moveTo(i, 0);
                        ctx.lineTo(i, chart.height);
                        ctx.stroke();
                    }
                    
                    for (let i = 0; i < chart.height; i += 40) {
                        ctx.beginPath();
                        ctx.moveTo(0, i);
                        ctx.lineTo(chart.width, i);
                        ctx.stroke();
                    }
                    
                    // Map of node positions with improved layout
                    const positions = {};
                    
                    // Position the nodes with more spacing and better organization
                    positions.start = { x: width / 2, y: 60 };
                    positions.within30 = { x: width / 2, y: 160 };
                    positions.yes30 = { x: width / 3, y: 260 };
                    positions.no30 = { x: 2.2 * width / 3, y: 260 };
                    positions.receipt = { x: width / 3, y: 360 };
                    positions.yesReceipt = { x: width / 5, y: 460 };
                    positions.noReceipt = { x: width / 2.2, y: 460 };
                    positions.original = { x: width / 3, y: 560 };
                    positions.yesPay = { x: width / 5, y: 660 };
                    positions.noPay = { x: width / 2.2, y: 660 };
                    positions.contact = { x: 2.2 * width / 3, y: 360 };
                    positions.defective = { x: 2.2 * width / 3, y: 460 };
                    positions.yesDefect = { x: 2 * width / 3, y: 560 };
                    positions.noDefect = { x: 2.5 * width / 3, y: 560 };
                    positions.decision = { x: 2 * width / 3, y: 660 };
                    positions.approved = { x: 1.8 * width / 3, y: 760 };
                    positions.denied = { x: 2.2 * width / 3, y: 760 };
                    positions.end = { x: width / 2, y: 860 };
                    
                    // Create curved connections
                    function drawCurvedArrow(ctx, from, to, curveFactor = 0.2) {
                        const dx = to.x - from.x;
                        const dy = to.y - from.y;
                        const midX = from.x + dx / 2;
                        const midY = from.y + dy / 2;
                        
                        // Calculate control points for curve
                        let controlX, controlY;
                        
                        // If predominantly vertical movement
                        if (Math.abs(dy) > Math.abs(dx)) {
                            controlX = from.x + dx * curveFactor;
                            controlY = midY;
                        } else {
                            controlX = midX;
                            controlY = from.y + dy * curveFactor;
                        }
                        
                        const gradient = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
                        gradient.addColorStop(0, 'rgba(245, 100, 0, 0.5)');
                        gradient.addColorStop(1, 'rgba(245, 100, 0, 0.9)');
                        
                        ctx.strokeStyle = gradient;
                        ctx.lineWidth = 2.5;
                        
                        // Draw curved path
                        ctx.beginPath();
                        ctx.moveTo(from.x, from.y);
                        ctx.quadraticCurveTo(controlX, controlY, to.x, to.y);
                        ctx.stroke();
                        
                        // Draw arrow head
                        const headLength = 12;
                        const headWidth = 8;
                        
                        // Calculate angle of the end of the curve
                        const endPointX = to.x - from.x;
                        const endPointY = to.y - from.y;
                        const angle = Math.atan2(endPointY, endPointX);
                        
                        ctx.fillStyle = 'rgba(245, 100, 0, 0.9)';
                        ctx.beginPath();
                        ctx.moveTo(to.x, to.y);
                        ctx.lineTo(
                            to.x - headLength * Math.cos(angle - Math.PI/6),
                            to.y - headLength * Math.sin(angle - Math.PI/6)
                        );
                        ctx.lineTo(
                            to.x - headLength * Math.cos(angle + Math.PI/6),
                            to.y - headLength * Math.sin(angle + Math.PI/6)
                        );
                        ctx.closePath();
                        ctx.fill();
                        
                        // Add subtle glow effect
                        ctx.shadowColor = 'rgba(245, 100, 0, 0.5)';
                        ctx.shadowBlur = 5;
                        ctx.stroke();
                        ctx.shadowBlur = 0;
                    }
                    
                    // Draw all connections
                    data.forEach(node => {
                        if (node.next) {
                            if (Array.isArray(node.next)) {
                                node.next.forEach(nextId => {
                                    drawCurvedArrow(ctx, positions[node.id], positions[nextId]);
                                });
                            } else {
                                drawCurvedArrow(ctx, positions[node.id], positions[node.next]);
                            }
                        }
                    });
                    
                    // Draw all nodes with enhanced styling
                    data.forEach(node => {
                        const pos = positions[node.id];
                        
                        // Create gradient fills for nodes
                        let gradientFill;
                        
                        if (node.id === 'start' || node.id === 'end') {
                            gradientFill = ctx.createRadialGradient(pos.x, pos.y, 5, pos.x, pos.y, boxWidth/2);
                            gradientFill.addColorStop(0, 'rgba(245, 100, 0, 0.5)');
                            gradientFill.addColorStop(1, 'rgba(245, 100, 0, 0.2)');
                        } else if (node.id.includes('yes') || node.id === 'approved') {
                            gradientFill = ctx.createLinearGradient(pos.x - boxWidth/2, pos.y, pos.x + boxWidth/2, pos.y);
                            gradientFill.addColorStop(0, 'rgba(100, 200, 100, 0.2)');
                            gradientFill.addColorStop(1, 'rgba(100, 200, 100, 0.1)');
                        } else if (node.id.includes('no') || node.id === 'denied') {
                            gradientFill = ctx.createLinearGradient(pos.x - boxWidth/2, pos.y, pos.x + boxWidth/2, pos.y);
                            gradientFill.addColorStop(0, 'rgba(200, 100, 100, 0.2)');
                            gradientFill.addColorStop(1, 'rgba(200, 100, 100, 0.1)');
                        } else if (node.id === 'within30' || node.id === 'receipt' || node.id === 'original' || 
                                  node.id === 'defective' || node.id === 'decision') {
                            gradientFill = ctx.createLinearGradient(pos.x, pos.y - boxHeight/2, pos.x, pos.y + boxHeight/2);
                            gradientFill.addColorStop(0, 'rgba(245, 100, 0, 0.3)');
                            gradientFill.addColorStop(1, 'rgba(245, 100, 0, 0.1)');
                        } else {
                            gradientFill = ctx.createLinearGradient(pos.x - boxWidth/2, pos.y, pos.x + boxWidth/2, pos.y);
                            gradientFill.addColorStop(0, 'rgba(245, 100, 0, 0.25)');
                            gradientFill.addColorStop(1, 'rgba(245, 100, 0, 0.15)');
                        }
                        
                        // Add node shadows
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
                        ctx.shadowBlur = 10;
                        ctx.shadowOffsetX = 3;
                        ctx.shadowOffsetY = 3;
                        
                        ctx.fillStyle = gradientFill;
                        ctx.strokeStyle = 'rgba(245, 100, 0, 0.8)';
                        ctx.lineWidth = 2;
                        
                        // Different shape for different node types
                        if (node.id === 'within30' || node.id === 'receipt' || node.id === 'original' || 
                            node.id === 'defective' || node.id === 'decision') {
                            // Smoothed diamond shape for decision nodes
                            ctx.beginPath();
                            const radius = 10; // Corner radius
                            
                            // Top point
                            ctx.moveTo(pos.x, pos.y - boxHeight/2);
                            // To right point with rounded corner
                            ctx.quadraticCurveTo(
                                pos.x + boxWidth/2 - radius, pos.y - radius, 
                                pos.x + boxWidth/2, pos.y
                            );
                            // To bottom point with rounded corner
                            ctx.quadraticCurveTo(
                                pos.x + radius, pos.y + boxHeight/2 - radius,
                                pos.x, pos.y + boxHeight/2
                            );
                            // To left point with rounded corner
                            ctx.quadraticCurveTo(
                                pos.x - boxWidth/2 + radius, pos.y + radius,
                                pos.x - boxWidth/2, pos.y
                            );
                            // Back to top point with rounded corner
                            ctx.quadraticCurveTo(
                                pos.x - radius, pos.y - boxHeight/2 + radius,
                                pos.x, pos.y - boxHeight/2
                            );
                            
                            ctx.closePath();
                        } else if (node.id === 'start' || node.id === 'end') {
                            // Capsule shape for start/end
                            const radius = boxHeight / 2;
                            ctx.beginPath();
                            ctx.arc(pos.x - boxWidth/2 + radius, pos.y, radius, Math.PI / 2, Math.PI * 3 / 2);
                            ctx.lineTo(pos.x + boxWidth/2 - radius, pos.y - radius);
                            ctx.arc(pos.x + boxWidth/2 - radius, pos.y, radius, Math.PI * 3 / 2, Math.PI / 2);
                            ctx.lineTo(pos.x - boxWidth/2 + radius, pos.y + radius);
                            ctx.closePath();
                        } else {
                            // Rounded rectangle for process nodes
                            ctx.beginPath();
                            const radius = 10;
                            ctx.roundRect(pos.x - boxWidth/2, pos.y - boxHeight/2, boxWidth, boxHeight, radius);
                            ctx.closePath();
                        }
                        
                        ctx.fill();
                        ctx.stroke();
                        
                        // Reset shadows for text
                        ctx.shadowColor = 'transparent';
                        ctx.shadowBlur = 0;
                        ctx.shadowOffsetX = 0;
                        ctx.shadowOffsetY = 0;
                        
                        // Add a subtle inner glow/highlight
                        if (node.id === 'start' || node.id === 'end' || 
                            node.id.includes('yes') || node.id === 'approved') {
                            ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
                            ctx.lineWidth = 1;
                            
                            if (node.id === 'start' || node.id === 'end') {
                                const radius = boxHeight / 2 - 2;
                                ctx.beginPath();
                                ctx.arc(pos.x - boxWidth/2 + radius + 2, pos.y, radius, Math.PI / 2, Math.PI * 3 / 2);
                                ctx.lineTo(pos.x + boxWidth/2 - radius - 2, pos.y - radius);
                                ctx.arc(pos.x + boxWidth/2 - radius - 2, pos.y, radius, Math.PI * 3 / 2, Math.PI / 2);
                                ctx.lineTo(pos.x - boxWidth/2 + radius + 2, pos.y + radius);
                                ctx.closePath();
                            } else {
                                ctx.beginPath();
                                const radius = 8;
                                ctx.roundRect(
                                    pos.x - boxWidth/2 + 2, 
                                    pos.y - boxHeight/2 + 2, 
                                    boxWidth - 4, 
                                    boxHeight - 4, 
                                    radius
                                );
                                ctx.closePath();
                            }
                            ctx.stroke();
                        }
                        
                        // Draw main label text with styling
                        ctx.fillStyle = 'var(--bs-body-color)';
                        ctx.font = 'bold 12px Arial';
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        
                        // Draw multiline text
                        const words = node.label.split(' ');
                        let line = '';
                        let lineHeight = 16; // Slightly increased line height
                        let y = pos.y - 10; // Start slightly above center
                        
                        for (let i = 0; i < words.length; i++) {
                            const testLine = line + words[i] + ' ';
                            if (testLine.length > 22 && i > 0) {
                                ctx.fillText(line, pos.x, y);
                                line = words[i] + ' ';
                                y += lineHeight;
                            } else {
                                line = testLine;
                            }
                        }
                        ctx.fillText(line, pos.x, y);
                        
                        // Draw "hover for details" text
                        if (node.details) {
                            ctx.font = 'italic 9px Arial';
                            ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
                            ctx.fillText('Hover for details', pos.x, pos.y + boxHeight/2 - 10);
                        }
                        
                        // Add small icon based on node type
                        if (node.id === 'start') {
                            drawIcon(ctx, pos.x - boxWidth/3, pos.y, 'start');
                        } else if (node.id === 'end') {
                            drawIcon(ctx, pos.x - boxWidth/3, pos.y, 'end');
                        } else if (node.id.includes('yes') || node.id === 'approved') {
                            drawIcon(ctx, pos.x - boxWidth/3, pos.y - 8, 'check');
                        } else if (node.id.includes('no') || node.id === 'denied') {
                            drawIcon(ctx, pos.x - boxWidth/3, pos.y - 8, 'cross');
                        } else if (node.id === 'within30' || node.id === 'receipt' || 
                                  node.id === 'original' || node.id === 'defective' || 
                                  node.id === 'decision') {
                            drawIcon(ctx, pos.x - boxWidth/3, pos.y, 'question');
                        }
                    });
                    
                    // Helper function to draw icons
                    function drawIcon(ctx, x, y, type) {
                        ctx.lineWidth = 2;
                        
                        switch(type) {
                            case 'start':
                                ctx.fillStyle = 'rgba(245, 100, 0, 0.9)';
                                ctx.beginPath();
                                ctx.moveTo(x - 5, y - 8);
                                ctx.lineTo(x + 7, y);
                                ctx.lineTo(x - 5, y + 8);
                                ctx.closePath();
                                ctx.fill();
                                break;
                                
                            case 'end':
                                ctx.fillStyle = 'rgba(245, 100, 0, 0.9)';
                                ctx.beginPath();
                                ctx.arc(x, y, 7, 0, Math.PI * 2);
                                ctx.closePath();
                                ctx.fill();
                                break;
                                
                            case 'check':
                                ctx.strokeStyle = 'rgba(100, 200, 100, 0.9)';
                                ctx.beginPath();
                                ctx.moveTo(x - 5, y);
                                ctx.lineTo(x - 2, y + 5);
                                ctx.lineTo(x + 5, y - 3);
                                ctx.stroke();
                                break;
                                
                            case 'cross':
                                ctx.strokeStyle = 'rgba(200, 100, 100, 0.9)';
                                ctx.beginPath();
                                ctx.moveTo(x - 5, y - 5);
                                ctx.lineTo(x + 5, y + 5);
                                ctx.moveTo(x + 5, y - 5);
                                ctx.lineTo(x - 5, y + 5);
                                ctx.stroke();
                                break;
                                
                            case 'question':
                                ctx.fillStyle = 'rgba(245, 165, 0, 0.9)';
                                ctx.beginPath();
                                ctx.arc(x, y, 7, 0, Math.PI * 2);
                                ctx.closePath();
                                ctx.fill();
                                
                                ctx.fillStyle = 'white';
                                ctx.font = 'bold 10px Arial';
                                ctx.fillText('?', x, y + 3);
                                break;
                        }
                    }
                    
                    ctx.restore();
                }
            }]
        });
        
        // Make canvas interactive with hover effects
        nikeFlowchart.addEventListener('mousemove', function(e) {
            const activePoints = nikeFlow.getElementsAtEventForMode(
                e, 'nearest', { intersect: true }, false
            );
            
            if (activePoints.length > 0) {
                nikeFlowchart.style.cursor = 'pointer';
            } else {
                nikeFlowchart.style.cursor = 'default';
            }
        });
    }
    
    // Create Puma refund flowchart if element exists
    const pumaFlowchart = document.getElementById('pumaFlowchart') || document.getElementById('pumaRefundFlowchart');
    if (pumaFlowchart) {
        const pumaFlow = new Chart(pumaFlowchart, {
            type: 'bar',
            data: {
                datasets: [{
                    backgroundColor: 'rgba(0, 114, 187, 0.2)',
                    borderColor: 'rgba(0, 114, 187, 1)',
                    borderWidth: 1,
                    data: [{
                        id: 'start',
                        label: 'Problem with Puma Future 9',
                        details: 'Puma offers 14-day standard return policy\nand 6-month manufacturing warranty',
                        next: 'within14'
                    }, {
                        id: 'within14',
                        label: 'Within 14 days of purchase?',
                        details: 'In-store purchases: 14-day window\nOnline purchases: 30-day window',
                        next: ['yes14', 'no14']
                    }, {
                        id: 'yes14',
                        label: 'YES: Eligible for full refund',
                        details: 'Items must be in original condition\nwith all tags and packaging',
                        next: 'receipt'
                    }, {
                        id: 'no14',
                        label: 'NO: Check warranty policy',
                        details: '6-month manufacturing defect warranty\nCovers stitching and material separation',
                        next: 'contact'
                    }, {
                        id: 'receipt',
                        label: 'Have original receipt?',
                        details: 'Original receipt mandatory for refunds\nEmail confirmation accepted for online purchases',
                        next: ['yesReceipt', 'noReceipt']
                    }, {
                        id: 'yesReceipt',
                        label: 'YES: Return to store for refund',
                        details: 'Return to original store of purchase preferred\nBut any Puma store may accept returns',
                        next: 'condition'
                    }, {
                        id: 'noReceipt',
                        label: 'NO: Refund may be denied',
                        details: 'Puma has stricter receipt policy than competitors\nStore managers may have limited discretion',
                        next: 'end'
                    }, {
                        id: 'condition',
                        label: 'Original condition with packaging?',
                        details: 'Shoes must be unworn with original box\nAll tags and inserts must be present',
                        next: ['yesCond', 'noCond']
                    }, {
                        id: 'yesCond',
                        label: 'YES: Full refund to original payment',
                        details: 'Original payment method refund in 5-10 business days\nCredit cards process faster than other methods',
                        next: 'end'
                    }, {
                        id: 'noCond',
                        label: 'NO: Refund may be reduced',
                        details: 'Missing packaging: up to 20% reduction\nSigns of wear: up to 50% reduction or denial',
                        next: 'end'
                    }, {
                        id: 'contact',
                        label: 'Contact Puma Customer Service',
                        details: 'Phone: 1-888-565-7862\nEmail: customerservice@puma.com',
                        next: 'defective'
                    }, {
                        id: 'defective',
                        label: 'Manufacturing defect claim?',
                        details: 'Valid claims include: material separation,\nstitching issues, sole delamination',
                        next: ['yesDefect', 'noDefect']
                    }, {
                        id: 'yesDefect',
                        label: 'YES: Submit photos & receipt',
                        details: 'Provide clear photos of defect from multiple angles\nAnd proof of purchase showing date',
                        next: 'inspect'
                    }, {
                        id: 'noDefect',
                        label: 'NO: No refund available',
                        details: 'Normal wear, stud wear, color fading,\nand damage from misuse not covered',
                        next: 'end'
                    }, {
                        id: 'inspect',
                        label: 'Puma inspection process',
                        details: '10-14 day inspection period\nMay request product to be returned for evaluation',
                        next: ['valid', 'invalid']
                    }, {
                        id: 'valid',
                        label: 'APPROVED: Replacement offered',
                        details: 'Same model replacement if available\nComparable model if original is discontinued',
                        next: 'end'
                    }, {
                        id: 'invalid',
                        label: 'DENIED: No refund provided',
                        details: 'No formal appeal process\nBut escalation to supervisor possible',
                        next: 'end'
                    }, {
                        id: 'end',
                        label: 'Process Complete',
                        details: 'Survey may be sent by email\nto rate customer experience',
                    }]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: 'Puma Refund Process Flowchart',
                        font: {
                            size: 18,
                            weight: 'bold'
                        },
                        color: 'rgba(0, 114, 187, 1)',
                        padding: {
                            top: 10,
                            bottom: 30
                        }
                    },
                    flowchart: {
                        fillOpacity: 0.9
                    },
                    tooltip: {
                        enabled: true,
                        displayColors: false,
                        callbacks: {
                            label: function(context) {
                                return context.raw.details ? context.raw.details.split('\n') : '';
                            },
                            title: function(context) {
                                return context[0].raw.label;
                            }
                        }
                    }
                },
                animation: {
                    duration: 800,
                    easing: 'easeOutQuart'
                },
                layout: {
                    padding: {
                        top: 20,
                        right: 40,
                        bottom: 40,
                        left: 40
                    }
                }
            },
            plugins: [{
                id: 'flowchart',
                beforeDraw: function(chart) {
                    const ctx = chart.ctx;
                    const data = chart.data.datasets[0].data;
                    const chartArea = chart.chartArea;
                    const width = chartArea.right - chartArea.left;
                    const height = chartArea.bottom - chartArea.top;
                    const boxWidth = 200;
                    const boxHeight = 50;
                    
                    ctx.save();
                    
                    // Clear the canvas
                    ctx.clearRect(0, 0, chart.width, chart.height);
                    
                    // Map of node positions
                    const positions = {};
                    
                    // Position the nodes
                    positions.start = { x: width / 2, y: 50 };
                    positions.within14 = { x: width / 2, y: 130 };
                    positions.yes14 = { x: width / 3, y: 210 };
                    positions.no14 = { x: 2 * width / 3, y: 210 };
                    positions.receipt = { x: width / 3, y: 290 };
                    positions.yesReceipt = { x: width / 6, y: 370 };
                    positions.noReceipt = { x: width / 2.5, y: 370 };
                    positions.condition = { x: width / 6, y: 450 };
                    positions.yesCond = { x: width / 12, y: 530 };
                    positions.noCond = { x: width / 4, y: 530 };
                    positions.contact = { x: 2 * width / 3, y: 290 };
                    positions.defective = { x: 2 * width / 3, y: 370 };
                    positions.yesDefect = { x: 2 * width / 3 - 80, y: 450 };
                    positions.noDefect = { x: 2 * width / 3 + 80, y: 450 };
                    positions.inspect = { x: 2 * width / 3 - 80, y: 530 };
                    positions.valid = { x: 2 * width / 3 - 130, y: 610 };
                    positions.invalid = { x: 2 * width / 3 - 30, y: 610 };
                    positions.end = { x: width / 2, y: 690 };
                    
                    // Draw connections
                    ctx.strokeStyle = 'rgba(0, 114, 187, 0.7)';
                    ctx.lineWidth = 2;
                    
                    // Draw lines
                    data.forEach(node => {
                        if (node.next) {
                            if (Array.isArray(node.next)) {
                                node.next.forEach(nextId => {
                                    drawArrow(ctx, positions[node.id], positions[nextId]);
                                });
                            } else {
                                drawArrow(ctx, positions[node.id], positions[node.next]);
                            }
                        }
                    });
                    
                    // Draw nodes
                    data.forEach(node => {
                        const pos = positions[node.id];
                        
                        // Draw box
                        ctx.fillStyle = 'rgba(0, 114, 187, 0.2)';
                        ctx.strokeStyle = 'rgba(0, 114, 187, 0.7)';
                        ctx.lineWidth = 2;
                        
                        // Different shape for decision nodes
                        if (node.id === 'within14' || node.id === 'receipt' || node.id === 'condition' || 
                            node.id === 'defective' || node.id === 'inspect') {
                            // Diamond shape for decision nodes
                            ctx.beginPath();
                            ctx.moveTo(pos.x, pos.y - boxHeight/2);
                            ctx.lineTo(pos.x + boxWidth/2, pos.y);
                            ctx.lineTo(pos.x, pos.y + boxHeight/2);
                            ctx.lineTo(pos.x - boxWidth/2, pos.y);
                            ctx.closePath();
                        } else if (node.id === 'start' || node.id === 'end') {
                            // Rounded rectangle for start/end
                            ctx.beginPath();
                            ctx.roundRect(pos.x - boxWidth/2, pos.y - boxHeight/2, boxWidth, boxHeight, 15);
                            ctx.closePath();
                        } else {
                            // Rectangle for process nodes
                            ctx.beginPath();
                            ctx.rect(pos.x - boxWidth/2, pos.y - boxHeight/2, boxWidth, boxHeight);
                            ctx.closePath();
                        }
                        
                        ctx.fill();
                        ctx.stroke();
                        
                        // Draw text
                        ctx.fillStyle = 'var(--bs-body-color)';
                        ctx.font = '12px Arial';
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        
                        const words = node.label.split(' ');
                        let line = '';
                        let lineHeight = 15;
                        let y = pos.y - lineHeight * (words.length > 3 ? 1 : 0.5);
                        
                        for (let i = 0; i < words.length; i++) {
                            const testLine = line + words[i] + ' ';
                            if (testLine.length > 20 && i > 0) {
                                ctx.fillText(line, pos.x, y);
                                line = words[i] + ' ';
                                y += lineHeight;
                            } else {
                                line = testLine;
                            }
                        }
                        ctx.fillText(line, pos.x, y);
                    });
                    
                    ctx.restore();
                }
            }]
        });
        
        // Function to draw arrow
        function drawArrow(ctx, from, to) {
            const headLength = 10;
            const headAngle = Math.PI / 6;
            
            // Calculate direction
            const dx = to.x - from.x;
            const dy = to.y - from.y;
            const angle = Math.atan2(dy, dx);
            
            // Start a new path
            ctx.beginPath();
            ctx.moveTo(from.x, from.y);
            ctx.lineTo(to.x, to.y);
            ctx.stroke();
            
            // Draw the arrow head
            ctx.beginPath();
            ctx.moveTo(to.x, to.y);
            ctx.lineTo(
                to.x - headLength * Math.cos(angle - headAngle),
                to.y - headLength * Math.sin(angle - headAngle)
            );
            ctx.lineTo(
                to.x - headLength * Math.cos(angle + headAngle),
                to.y - headLength * Math.sin(angle + headAngle)
            );
            ctx.closePath();
            ctx.fill();
        }
    }
});
