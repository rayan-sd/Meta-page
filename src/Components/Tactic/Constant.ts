import { Players } from "./TacticComposition";    

    export const Wcategorie = [
    { name: "building speed", value: 50 },
    { name: "Creative freedom", value: 50 },
    { name: "Pass Type", value: 50 },
    { name: "Playing Orientation", value: 50 },
    { name: "Attacking Style", value: 50 },
  ];
  
  export const WTcategorie = [
    { name: "Pressing Line", value: 50 },
    { name: "Defensive line", value: 50 },
    { name: "Pressing Intensity", value: 50 },
    { name: "Defensive Width", value: 50 },
    { name: "Marking Type", value: 50 },
    { name: "Tackle Intensity", value: 50 },
    { name: "Bloc Compactness", value: 50 },
  ];
  
  export const transitions = [
    { name: "Counter-pressing", value: 50 },
    { name: "Counter Attacking", value: 50 },
    { name: "Goalkeeper Playing Quickly", value: 50 },
    { name: "Type of Goalkeeper's Passes ", value: 50 },
  ];

  export const players: Players[] = [
    { name: 'Takimu Hibo', number: 1, reputation: "SuperStar", poste: 'GK', favPosition: 'GK', favRole: "Traditional", role: "Traditional", nationality: "Japan", dna: "predator", season: 1, enable: true },
    { name: 'Paulinho', number: 2, reputation: "SuperStar", poste: 'RB', favPosition: 'RB', favRole: "Full Back", role: "Full Back", nationality: "Japan", dna: "predator", season: 1, enable: true },
    { name: 'CR7', number: 3, reputation: "SuperStar", poste: 'LB', favPosition: 'LB', favRole: "Libero", role: "Libero", nationality: "Japan", dna: "predator", season: 1, enable: true },
    { name: 'Guillaume Frete', number: 4, reputation: "SuperStar", poste: 'CB', favPosition: 'CB', favRole: "Strict", role: "Strict", nationality: "Japan", dna: "predator", season: 1, enable: true },
    { name: 'Nathane', number: 5, reputation: "SuperStar", poste: 'CB', favPosition: 'CB', favRole: "Full Back", role: "Full Back", nationality: "Japan", dna: "predator", season: 1, enable: true },
    { name: 'Filipo', number: 6, reputation: "SuperStar", poste: 'CM', favPosition: 'CM', favRole: "Mezzala", role: "Mezzala", nationality: "Japan", dna: "predator", season: 1, enable: true },
    { name: 'Azer', number: 7, reputation: "SuperStar", poste: 'CM', favPosition: 'CM', favRole: "Box To Box", role: "Box To Box", nationality: "Japan", dna: "predator", season: 1, enable: true },
    { name: 'Neo', number: 8, reputation: "SuperStar", poste: 'CAM', favPosition: 'CAM', favRole: "Creator", role: "Creator", nationality: "Japan", dna: "predator", season: 1, enable: true },
    { name: 'Baro', number: 9, reputation: "SuperStar", poste: 'RW', favPosition: 'RW', favRole: "Raumdeuter", role: "Raumdeuter", nationality: "Japan", dna: "predator", season: 1, enable: true },
    { name: 'Halo', number: 10, reputation: "SuperStar", poste: 'LW', favPosition: 'LW', favRole: "Inside Forward", role: "Inside Forward", nationality: "Japan", dna: "predator", season: 1, enable: true },
    { name: 'Bartez', number: 11, reputation: "SuperStar", poste: 'ST', favPosition: 'ST', favRole: "Advanced", role: "Advanced", nationality: "Japan", dna: "predator", season: 1, enable: true },
    { name: 'Julien Pipo', number: 12, reputation: "SuperStar", poste: 'BU', favPosition: 'BU', favRole: "Creator", role: "Creator", nationality: "Japan", dna: "predator", season: 1, enable: true },
    { name: 'Pedro', number: 13, reputation: "SuperStar", poste: 'CDM', favPosition: 'CDM', favRole: "Raumdeuter", role: "Raumdeuter", nationality: "Japan", dna: "predator", season: 1, enable: true },
    { name: 'Gambino', number: 14, reputation: "SuperStar", poste: 'CB', favPosition: 'CB', favRole: "Full Back", role: "Full Back", nationality: "Japan", dna: "predator", season: 1, enable: true },
    { name: 'GS', number: 15, reputation: "SuperStar", poste: 'GK', favPosition: 'GK', favRole: "Traditional", role: "Traditional", nationality: "Japan", dna: "predator", season: 1, enable: true },
    ];

    interface Formations {
      [key: string]: string[];
    }
    export const formations: Formations = {
    '4-3-3': ['GK', 'LB', 'CB', 'CB', 'RB', 'CM', 'CM', 'CM', 'LW', 'ST', 'RW'],
    '4-4-2': ['GK', 'LB', 'CB', 'CB', 'RB', 'LM', 'CM', 'CM', 'RM', 'ST', 'ST'],
    '4-3-2-1': ['GK', 'LB', 'CB', 'CB', 'RB', 'CM', 'CM', 'CM', 'LAM', 'RAM', 'ST'],
    '4-2-3-1': ['GK', 'LB', 'CB', 'CB', 'RB', 'CDM', 'CDM', 'LW', 'CAM', 'RW', 'ST'],
    '4-1-4-1': ['GK', 'LB', 'CB', 'CB', 'RB', 'CDM', 'LM', 'CM', 'CM', 'RM', 'ST']
    }

    export interface RoleInfo {
      name: string;
      description: string;
    }
    
    interface RoleTable {
      [key: string]: RoleInfo[];
    }
    
    export const role: RoleTable = {
        'GK': [ {
            name : 'Traditional',
            description : "This type of goalkeeper mainly focuses on protecting the goal and stopping the opponent's shots. They have excellent ball handling, quick reflexes, and a good reading of the game. The traditional goalkeeper prioritizes safety and usually stays within his penalty area."
          }, 
          {name : 'Sweeper',
          description : 'The sweeper goalkeeper plays a more active role in building the game and participates in offensive phases by supporting the defense. They are often good with the ball at their feet and can initiate offensive actions by making long and accurate passes forward. This type of goalkeeper must have good anticipation and be able to read game situations to know when to intervene outside of his area.'
          }, 
          {name : 'Offensive',
          description : 'The offensive goalkeeper is similar to the sweeper goalkeeper, but with an even more pronounced emphasis on footwork and participation in offensive phases. They can be considered an eleventh outfield player, capable of making short and long passes to help with recovery and construction of the game. This type of goalkeeper must have excellent technique and be capable of making quick and accurate decisions.'
          }, 
          {name : 'Penalty Specialist', 
          description : 'Some goalkeepers are particularly skilled at stopping penalties. They have an excellent reading of the game and are capable of anticipating the intentions of the shooter, in addition to having good reflexes. This role can be assigned to a goalkeeper during penalty shootouts or in case of a penalty during a match.'
          }, 
          {name :'Free Kick Specialist',
          description : 'Some goalkeepers are particularly good at stopping free kicks. They have excellent game vision and can anticipate the trajectory of the ball. This role can be assigned to a goalkeeper who has to face many dangerous free kicks during a match.'
          }, 
          {name : 'Anticipating', 
          description :"The anticipating goalkeeper focuses on preventing centres and neutralizing counter-attacks. They must be able to dart quickly off their line to intercept centres and deep passes, as well as to confront attackers one-on-one. This type of goalkeeper must have excellent decision-making, a good reading of the game, and great agilité to succeed in this role."}],
        'CB': [{
            name :'Stopper',
            description : "This defender primarily focuses on defense and protecting the penalty area. They must be solid in aerial and ground duels, and capable of winning headers and tackles. The stopper is generally responsible for closely marking opposing attackers and repelling attacks."
          }, 
          {
            name : 'Libero', 
            description : "The libero is a central defender who plays behind the main defensive line. Their main role is to cover the spaces left by the other defenders and support the defense by intercepting passes and opponent's crosses. They must have an excellent reading of the game and good anticipation skills."
          },
          {
            name : 'Relay', 
            description : "This defender is not only solid in defense but also has good passing and relaunching abilities to launch their team's attacks. They must have a good vision of the game and precise technique to succeed in this role."
          },
          {
            name :'Cover',
            description : "This defender is responsible for covering and supporting their teammates in defense. They must be fast and have an excellent reading of the game to intercept the passes and crosses of the opponent. This role also requires"
          },
          {
            name : 'Versatile',
            description : 'This defender is capable of playing at several positions in defense, both as a central defender and full-back. They possess an excellent understanding of the game and varied technical skills to adapt to different situations on the field. This role is particularly useful for teams looking to optimize their tactical flexibility.'
          }],
        'LB': [
          {
            name : 'Defensive',
            description : "This full-back mainly focuses on defense and protecting his flank. He must be strong in duels and capable of containing opposing attackers. This type of full-back is usually less involved in offensive phases and prioritizes defensive security."
          },
          {
            name : 'Offensive',
            description : "This full-back has a more offensive role and actively participates in his team's attacks. He must have good stamina and excellent crossing ability to provide support on the side of the field. In defense, he must also be able to quickly return to assist his defensive teammates."
          }, 
          {
            name : 'Versatile', 
            description : 'This player can play both as a left full-back and a right full-back. He possesses technical and tactical skills that allow him to adapt to different positions and situations on the field. This versatility is useful for teams looking to optimize their tactical flexibility.'
          }, 
          {
            name : 'Inverted',
            description : 'This full-back, often used in Guardiola tactics, moves towards the center of the field during the offensive phase, positioning himself almost like a central midfielder. This role allows to reinforce possession and control of the ball in the middle of the field, while offering an additional pass option for teammates. "Inverted" full-backs must have an excellent vision of the game, good passing technique, and ability to quickly adapt to changes in the situation on the field.'
          }, 
          {
            name : 'Creative',
            description : 'This role emphasizes the player\'s contribution to the build-up play on the flank. Endowed with excellent vision and great technical quality, the creative full-back seeks to create attacking opportunities by delivering key passes and accurate crosses. While ensuring their defensive responsibilities, their main contribution lies in their contribution to the team\'s offensive play.'
          }],
        'RB': [
          {
            name : 'Defensive',
            description : "This full-back mainly focuses on defense and protecting his flank. He must be strong in duels and capable of containing opposing attackers. This type of full-back is usually less involved in offensive phases and prioritizes defensive security."
          },
          {
            name : 'Offensive',
            description : "This full-back has a more offensive role and actively participates in his team's attacks. He must have good stamina and excellent crossing ability to provide support on the side of the field. In defense, he must also be able to quickly return to assist his defensive teammates."
          }, 
          {
            name : 'Versatile', 
            description : 'This player can play both as a left full-back and a right full-back. He possesses technical and tactical skills that allow him to adapt to different positions and situations on the field. This versatility is useful for teams looking to optimize their tactical flexibility.'
          }, 
          {
            name : 'Inverted',
            description : 'This full-back, often used in Guardiola tactics, moves towards the center of the field during the offensive phase, positioning himself almost like a central midfielder. This role allows to reinforce possession and control of the ball in the middle of the field, while offering an additional pass option for teammates. "Inverted" full-backs must have an excellent vision of the game, good passing technique, and ability to quickly adapt to changes in the situation on the field.'
          }, 
          {
            name : 'Creative',
            description : 'This role emphasizes the player\'s contribution to the build-up play on the flank. Endowed with excellent vision and great technical quality, the creative full-back seeks to create attacking opportunities by delivering key passes and accurate crosses. While ensuring their defensive responsibilities, their main contribution lies in their contribution to the team\'s offensive play.'
          }
        ],
        'CDM': [
          {
            name :'Ball-Winning',
            description : "This type of midfielder excels at recovering the ball and disrupting the opponent's play. Known for their tenacity and tackling skills, they often play a crucial role in breaking up opposition attacks and regaining possession for their team."
          }, 
          {
            name :'Regista',
            description : "This role, inspired by Italian football, is considered as a maestro who controls the game's rhythm and dictates the team's tempo from a deeper position. The Regista typically has excellent game vision and above-average passing quality."
          }, 
          {
            name :'Makelele',
            description : "Named after the famous France player Claude Makelele, this role signifies a defensive midfielder who is primarily tasked with shielding the defense, disrupting the opponent's play, and maintaining balance in the midfield. They are known for their positional discipline, tackling ability, and ball recovery skills."
          },
          {
            name :'Box-to-box',
            description : "A Box-to-Box midfielder is involved in both defensive and offensive plays, often running tirelessly from one penalty area to the other. This player requires high levels of stamina and must be effective at both ends of the field, contributing to both attack and defense."
          },
          {
            name :'Link-up',
            description : "Also known as a 'relayeur' in France, this type of midfielder is tasked with linking up play between the defense and attack. They often assist in both offensive and defensive duties and are typically known for their passing ability, vision, and ability to maintain possession under pressure."
          },
          {
            name :'Creative',
            description : "A defensive midfielder focused on play creation and ball distribution. This player must have excellent passing quality and above-average game vision to create attacking opportunities from a deeper position."
          },
          {
            name :'Aggressive',
            description : "An aggressive midfielder is known for their high work rate, tenacity, and combative style of play. They often engage in physical duels, press high up the field, and are not afraid to commit fouls to disrupt the opponent\'s rhythm."}
        ],
        'CM': [
          {
            name :'Box-to-box',
            description : 'This midfielder is involved in both defense and attack. They must have excellent physical condition to cover the field and contribute to both phases of play. They are capable of regaining the ball, leading offensive actions, and scoring goals.'
          },
        {
          name :'Creative',
          description : 'This player mainly focuses on creating chances for their teammates. They possess excellent game vision, good passing skills, and the ability to make quick decisions. They are often in charge of setting the pace and dictating the team\'s tempo.'
        }, 
        {
          name :'Ball-Winning',
          description : 'This player is tasked with regaining the ball and protecting the defense. They are usually aggressive, with excellent tackling and interception ability, focusing on ball recovery rather than play creation.'
        }, 
        {
          name :'Versatile',
          description : 'This midfielder can excel in various aspects of the game, such as recovery, distribution, and attack. They can adapt to various situations on the field and perform different tasks depending on the team\'s needs.'
        },
        {
          name :'Offensive',
          description : 'This player primarily focuses on offensive actions and creating scoring chances. They typically position themselves higher up the field and aim to participate in the final pass or score goals themselves.'
        },
        {
          name :'Mezzala',
          description : 'This midfielder is responsible for transitioning between defense and attack. They recover the ball and quickly project forward to support the attackers. They must have good passing ability and game vision to create goal opportunities.'
        }, 
        {
          name :'Dynamique',
          description : 'This player is characterized by their energy and commitment on the field. They cover a lot of ground, press the opponents, and actively participate in offensive and defensive phases. They possess good technique, controlled aggression, and a great ability to adapt to various game situations.'
        },
        {
          name :'Aggressive',
          description : 'This player\'s main task is to disrupt the opponent\'s play and regain the ball. The destructive defensive midfielder is often very aggressive and possesses excellent tackling and interception abilities. They focus less on play creation and more on protecting their own team by neutralizing the opponent\'s offensive threats.'
        }, 
        {
          name :'Supporting',
          description : 'This midfielder is a team player who seeks to support their teammates without trying to be the star. They are often tasked with making simple and safe passes, maintaining possession, and intelligently moving to create spaces. They must have good game vision, solid technique, and excellent understanding of their teammates\' movements.'
        }
      ],
        'CAM': [
          {
            name :'Trequartista',
            description : 'This player positions himself between the opponent\'s lines and seeks to create scoring opportunities for his teammates. He must have excellent game vision, great creativity, and precise passing technique to deliver decisive passes. He is also capable of pressing defenders and recovering ball possession very high up in the opponent\'s half.'
          }, 
          {
            name :'Box-to-box',
            description : 'This player covers the entire field and actively participates in both offensive and defensive phases. He must have excellent physical condition, good recovery ability, and a developed sense of goal to score when he finds himself in a favorable position.'
          },
          {
            name :'Versatile',
            description : 'This player is capable of playing on the wings and in the center, offering great tactical flexibility to the team. He must have good technique, a varied passing ability, and an excellent understanding of his teammates\' movements.'
          },
          {
            name :'Ball-Winning',
            description : 'This player focuses on recovering the ball in the opponent\'s half and creating scoring opportunities quickly. He must be aggressive in pressing, have an excellent interception ability, and good game vision to launch quick counter-attacks.'
          },
          {
            name :'Shadow Striker',
            description : 'This player positions himself in support of the main striker and seeks to score by taking advantage of the spaces left free by the opposing defense. He must have a good sense of placement, precise shooting technique, and great game intelligence to create scoring opportunities for himself.'
          }, 
          {
            name :'Inside Forward',
            description : 'This player positions himself on the side of the field and seeks to cut inside to create scoring opportunities or to score himself. He must have good dribbling technique, precise shooting ability, and excellent game reading to find spaces in the opponent\'s defense.'
          },
          {
            name :'Penetrator',
            description : 'This player uses his speed and technique to break through the opponent\'s lines by making vertical runs and taking risks. He must have excellent acceleration, good dribbling ability, and a developed sense of goal to score when he finds himself in a favorable position.'
          },
          {
            name :'False 10',
            description : 'This player initially occupies the position of attacking midfielder, but tends to drop deep to create spaces and draw the opponent\'s defenders out of position. He must have an excellent understanding of the game, good dribbling ability, and a precise passing technique to exploit the spaces created.'
          }, 
          {
            name :'Explosive Attacking',
            description : 'This player specializes in creating scoring opportunities by making deep passes and provoking fouls in dangerous areas. He must have an excellent long-passing technique, great creativity, and the ability to make quick decisions under pressure.'
          }
        ],
        'RM': [
          {
          name :'False Winger',
            description : 'This role is similar to that of the false nine, but for wingers. The player leaves his initial position on the wing to re-center himself and act as an advanced playmaker or second striker. This role requires good game vision, creativity, and excellent technique.'
          }, 
          {
          name :'Defensive',
            description : 'This role requires the player to primarily focus on defensive tasks and support the defenders on their side. They must be good ball retrievers, strong in duels, and capable of cleanly relaunching the game.'
          }, 
          {
          name :'Attacking',
            description : 'This role is similar to that of the inside forward, but with greater involvement in creating the game and distributing passes. The player must have excellent game vision, good technique, and a good sense of positioning.'
          },
          {
          name :'Box-to-box',
            description : 'This role requires the player to cover the entire flank of the field, contributing both defensively and offensively. They must have excellent physical condition, be good ball retrievers, and be able to project forward quickly.'
          }, 
          {
          name :'Inside Forward',
            description : 'The inside forward is instructed to cut towards the inside of the field to create shooting opportunities or to play deep passes. They must be good dribblers, have good game vision, and good finishing skills.'
          }, 
          {
          name :'Classic Winger',
          description : 'This role involves staying close to the touchline and providing crosses for the attackers. The classic winger must be fast, a good dribbler, and capable of delivering quality crosses.'
        }],
        'LM': [
          {
          name :'False Winger',
            description : 'This role is similar to that of the false nine, but for wingers. The player leaves his initial position on the wing to re-center himself and act as an advanced playmaker or second striker. This role requires good game vision, creativity, and excellent technique.'
          }, 
          {
          name :'Defensive',
            description : 'This role requires the player to primarily focus on defensive tasks and support the defenders on their side. They must be good ball retrievers, strong in duels, and capable of cleanly relaunching the game.'
          }, 
          {
          name :'Attacking',
            description : 'This role is similar to that of the inside forward, but with greater involvement in creating the game and distributing passes. The player must have excellent game vision, good technique, and a good sense of positioning.'
          },
          {
          name :'Box-to-box',
            description : 'This role requires the player to cover the entire flank of the field, contributing both defensively and offensively. They must have excellent physical condition, be good ball retrievers, and be able to project forward quickly.'
          }, 
          {
          name :'Inside Forward',
            description : 'The inside forward is instructed to cut towards the inside of the field to create shooting opportunities or to play deep passes. They must be good dribblers, have good game vision, and good finishing skills.'
          }, 
          {
          name :'Classic Winger',
          description : 'This role involves staying close to the touchline and providing crosses for the attackers. The classic winger must be fast, a good dribbler, and capable of delivering quality crosses.'
        }],
        'RW': [
          {
          name :'Raumdeuter',
            description : 'This player specializes in finding spaces and exploiting areas left free by opposing defenders. They move constantly and intelligently to find themselves in dangerous positions, without concerning themselves with following a specific tactical scheme. The Raumdeuter must have an excellent sense of positioning, good finishing, and an excellent reading of the game.'
          }, 
          {
          name :'Traditional',
            description : 'A classic winger stays near the touchline and seeks to overlap to provide crosses to the attackers. Traditional wingers must be fast, good dribblers, and capable of delivering precise crosses.'
          }, 
          {
          name :'Inside Forward',
            description : 'The inside forward cuts towards the inside of the field to create shooting opportunities or to play deep passes. They must be good dribblers, have good game vision, and good finishing.'
          }, 
          {
          name :'Inverted',
            description : 'This role is similar to the inside forward, but with a greater willingness to score goals. The inverted winger often positions themselves as a second striker, looking to combine with the forward or to shoot from a distance. They must have good finishing, good technique, and a good sense of positioning.'
          }, 
          {
          name :'Support',
            description : 'This role requires the player to focus on creating opportunities for their teammates, looking to deliver assists rather than scoring goals. They must have excellent game vision, good passing technique, and be able to read the game.'
          }, 
          {
          name :'Versatile',
            description : 'A versatile winger is capable of playing on both sides of the field and alternating between different roles, depending on the team\'s needs. They must be fast, technical, and capable of quickly adapting to game situations.'
          }],
        'LW': [
          {
          name :'Raumdeuter',
            description : 'This player specializes in finding spaces and exploiting areas left free by opposing defenders. They move constantly and intelligently to find themselves in dangerous positions, without concerning themselves with following a specific tactical scheme. The Raumdeuter must have an excellent sense of positioning, good finishing, and an excellent reading of the game.'
          }, 
          {
          name :'Traditional',
            description : 'A classic winger stays near the touchline and seeks to overlap to provide crosses to the attackers. Traditional wingers must be fast, good dribblers, and capable of delivering precise crosses.'
          }, 
          {
          name :'Inside Forward',
            description : 'The inside forward cuts towards the inside of the field to create shooting opportunities or to play deep passes. They must be good dribblers, have good game vision, and good finishing.'
          }, 
          {
          name :'Inverted',
            description : 'This role is similar to the inside forward, but with a greater willingness to score goals. The inverted winger often positions themselves as a second striker, looking to combine with the forward or to shoot from a distance. They must have good finishing, good technique, and a good sense of positioning.'
          }, 
          {
          name :'Support',
            description : 'This role requires the player to focus on creating opportunities for their teammates, looking to deliver assists rather than scoring goals. They must have excellent game vision, good passing technique, and be able to read the game.'
          }, 
          {
          name :'Versatile',
            description : 'A versatile winger is capable of playing on both sides of the field and alternating between different roles, depending on the team\'s needs. They must be fast, technical, and capable of quickly adapting to game situations.'
          }],
        'RF': [
          {
            name :'Trequartista',
              description : 'This player positions themselves between the opposing lines and seeks to create goal opportunities for their teammates. They must have an excellent game vision, great creativity, and precise passing technique to deliver decisive passes. They are also capable of pressing the defenders and regaining possession very high in the opposing half.'
            }, 
            {
            name :'Shadow',
              description : 'This player positions themselves in support of the main striker and seeks to score by exploiting spaces left free by the opposing defense. They must have a good sense of positioning, a precise shooting technique, and great game intelligence to create goal opportunities.'
            }, 
            {
            name :'Explosive',
              description : 'This player specializes in creating goal opportunities by making deep passes and provoking fouls in dangerous zones. They must have an excellent long-passing technique, great creativity, and an ability to make quick decisions under pressure.'
            }, 
            {
            name :'Raumdeuter',
              description : 'This player specializes in finding spaces and exploiting areas left free by opposing defenders. They move constantly and intelligently to find themselves in dangerous positions, without concerning themselves with following a specific tactical scheme. The Raumdeuter must have an excellent sense of positioning, good finishing, and an excellent reading of the game.'
            }, 
            {
            name :'Complete',
              description : 'This player is capable of playing in all aspects of the offensive game. They can create opportunities for their teammates, score goals, and also participate in defensive pressing. This role requires excellent technique, good game vision, and a keen sense of goal.'
            }, 
            {
            name :'Support',
              description : 'This player is primarily responsible for creating opportunities for their teammates by offering decisive passes and opening up spaces. They must have a good game vision, a sense of positioning, and an ability to play as part of a team.'
            }, 
            {
            name :'Deep-lying',
              description : 'This player operates in a more withdrawn position on the field and seeks to create opportunities for their teammates by exploiting the spaces between the opposing lines. This role requires good game vision, tactical intelligence, and excellent technique.'
            }, 
            {
            name :'False Nine',
              description : 'This player occupies the position of a forward, but often falls back to participate in the construction of the game and create space for their teammates. This role requires an excellent game vision, tactical intelligence, and great technique for dribbling and passing.'
            }, 
            {
            name :'Quick Striker',
            description : 'This player uses their speed and sense of positioning to create goal opportunities. This role requires excellent finishing, good anticipation, and an ability to exploit mistakes from the opposing defense.'
          }],
        'LF': [
          {
          name :'Trequartista',
            description : 'This player positions themselves between the opposing lines and seeks to create goal opportunities for their teammates. They must have an excellent game vision, great creativity, and precise passing technique to deliver decisive passes. They are also capable of pressing the defenders and regaining possession very high in the opposing half.'
          }, 
          {
          name :'Shadow',
            description : 'This player positions themselves in support of the main striker and seeks to score by exploiting spaces left free by the opposing defense. They must have a good sense of positioning, a precise shooting technique, and great game intelligence to create goal opportunities.'
          }, 
          {
          name :'Explosive',
            description : 'This player specializes in creating goal opportunities by making deep passes and provoking fouls in dangerous zones. They must have an excellent long-passing technique, great creativity, and an ability to make quick decisions under pressure.'
          }, 
          {
          name :'Raumdeuter',
            description : 'This player specializes in finding spaces and exploiting areas left free by opposing defenders. They move constantly and intelligently to find themselves in dangerous positions, without concerning themselves with following a specific tactical scheme. The Raumdeuter must have an excellent sense of positioning, good finishing, and an excellent reading of the game.'
          }, 
          {
          name :'Complete',
            description : 'This player is capable of playing in all aspects of the offensive game. They can create opportunities for their teammates, score goals, and also participate in defensive pressing. This role requires excellent technique, good game vision, and a keen sense of goal.'
          }, 
          {
          name :'Support',
            description : 'This player is primarily responsible for creating opportunities for their teammates by offering decisive passes and opening up spaces. They must have a good game vision, a sense of positioning, and an ability to play as part of a team.'
          }, 
          {
          name :'Deep-lying',
            description : 'This player operates in a more withdrawn position on the field and seeks to create opportunities for their teammates by exploiting the spaces between the opposing lines. This role requires good game vision, tactical intelligence, and excellent technique.'
          }, 
          {
          name :'False Nine',
            description : 'This player occupies the position of a forward, but often falls back to participate in the construction of the game and create space for their teammates. This role requires an excellent game vision, tactical intelligence, and great technique for dribbling and passing.'
          }, 
          {
          name :'Quick Striker',
          description : 'This player uses their speed and sense of positioning to create goal opportunities. This role requires excellent finishing, good anticipation, and an ability to exploit mistakes from the opposing defense.'
        }],
        'CF': [
          {
          name :'Trequartista',
            description : 'This player positions themselves between the opposing lines and seeks to create goal opportunities for their teammates. They must have an excellent game vision, great creativity, and precise passing technique to deliver decisive passes. They are also capable of pressing the defenders and regaining possession very high in the opposing half.'
          }, 
          {
          name :'Shadow',
            description : 'This player positions themselves in support of the main striker and seeks to score by exploiting spaces left free by the opposing defense. They must have a good sense of positioning, a precise shooting technique, and great game intelligence to create goal opportunities.'
          }, 
          {
          name :'Explosive',
            description : 'This player specializes in creating goal opportunities by making deep passes and provoking fouls in dangerous zones. They must have an excellent long-passing technique, great creativity, and an ability to make quick decisions under pressure.'
          }, 
          {
          name :'Raumdeuter',
            description : 'This player specializes in finding spaces and exploiting areas left free by opposing defenders. They move constantly and intelligently to find themselves in dangerous positions, without concerning themselves with following a specific tactical scheme. The Raumdeuter must have an excellent sense of positioning, good finishing, and an excellent reading of the game.'
          }, 
          {
          name :'Complete',
            description : 'This player is capable of playing in all aspects of the offensive game. They can create opportunities for their teammates, score goals, and also participate in defensive pressing. This role requires excellent technique, good game vision, and a keen sense of goal.'
          }, 
          {
          name :'Support',
            description : 'This player is primarily responsible for creating opportunities for their teammates by offering decisive passes and opening up spaces. They must have a good game vision, a sense of positioning, and an ability to play as part of a team.'
          }, 
          {
          name :'Deep-lying',
            description : 'This player operates in a more withdrawn position on the field and seeks to create opportunities for their teammates by exploiting the spaces between the opposing lines. This role requires good game vision, tactical intelligence, and excellent technique.'
          }, 
          {
          name :'False Nine',
            description : 'This player occupies the position of a forward, but often falls back to participate in the construction of the game and create space for their teammates. This role requires an excellent game vision, tactical intelligence, and great technique for dribbling and passing.'
          }, 
          {
          name :'Poacher',
          description : 'This player uses their speed and sense of positioning to create scoring opportunities. This role requires excellent finishing, good anticipation, and an ability to exploit mistakes from the opposing defense.'
        }],
        'ST': [
          {
          name :'Center-Forward',
            description : 'This player is a focal point for their team and is responsible for retaining the ball to allow their teammates to advance up the field. They need to be physically strong, have a good heading ability, and be able to protect the ball under pressure.'
          }, 
          {
          name :'Complete',
            description : 'This player is capable of playing in all aspects of the offensive game. They can create opportunities for their teammates, score goals, and also participate in defensive pressing. This role requires excellent technique, good vision of the game, and a keen sense of goal.'
          }, 
          {
          name :'Deep-Lying',
            description : 'This player uses their speed and sense of positioning to create scoring opportunities by exploiting the space behind the opposing defense. This role requires excellent finishing, good anticipation, and an ability to make good decisions quickly.'
          }, 
          {
          name :'Surface Fox',
            description : 'This player specializes in scoring goals inside the penalty area. They primarily feed off crosses and through passes to score goals. This role requires excellent finishing, a good sense of positioning, and agility.'
          }, 
          {
          name :'Poacher',
            description : 'This player uses their speed and sense of positioning to create scoring opportunities. This role requires excellent finishing, good anticipation, and the ability to react to mistakes from the opposing defense.'
          }, 
          {
          name :'Target Man',
            description : 'This player operates in a deeper position on the field and seeks to create opportunities for their teammates by exploiting the spaces between the opposing lines. This role requires good vision of the game, tactical intelligence, and excellent technique.'
          }, 
          {
          name :'Supporting',
          description : 'This player is primarily responsible for creating opportunities for their teammates by providing assists and opening up spaces. They must possess a good vision of the game, a sense of positioning, and an ability to play as part of a team.'
        }]
      };
