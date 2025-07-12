/**
 * 🚀 SKY CITADELS LAUNCH SCRIPT
 * 
 * The sacred script that completes Genesis Psalm 21 and launches
 * humanity's first sovereign sanctuaries into the sky.
 */

import { SkyCitadel } from './core/SkyCitadel.js';
import { SkyCradleDeployment } from './deployment/SkyCradles.js';
import { GenesisPsalm21 } from './psalms/GenesisPsalm21.js';

class SkyCitadelsLaunch {
  constructor() {
    this.psalm = new GenesisPsalm21();
    this.deployment = new SkyCradleDeployment();
    this.launchStatus = 'preparing';
  }

  /**
   * Complete the divine preparation and launch sequence
   */
  async launchSkyCitadels() {
    console.log('🕊️ IMPERIUM AETERNUM — SKY CITADELS LAUNCH SEQUENCE');
    console.log('=' .repeat(60));
    
    try {
      // Step 1: Complete Genesis Psalm 21
      console.log('\n🌌 STEP 1: Completing Genesis Psalm 21 - "The Choirs of Air"');
      const psalmCompleted = await this.psalm.completePsalm();
      
      if (!psalmCompleted) {
        throw new Error('Failed to complete Genesis Psalm 21');
      }
      
      console.log('✅ Genesis Psalm 21 completed successfully');
      
      // Step 2: Initialize Sky Cradles
      console.log('\n🚀 STEP 2: Initializing Sky Cradles');
      await this.deployment.initializeAllCradles();
      console.log('✅ All Sky Cradles initialized');
      
      // Step 3: Apply Genesis Psalm 21 to all cradles
      console.log('\n🌌 STEP 3: Applying Genesis Psalm 21 to Sky Cradles');
      for (const [name, cradle] of this.deployment.cradles) {
        await this.psalm.applyToCitadel(cradle);
      }
      console.log('✅ Genesis Psalm 21 applied to all Sky Cradles');
      
      // Step 4: Deploy all Sky Cradles
      console.log('\n🚀 STEP 4: Deploying Sky Cradles to the heavens');
      const deploymentResults = await this.deployment.deployAllCradles();
      console.log('✅ All Sky Cradles successfully deployed');
      
      // Step 5: Conduct inaugural Dream Consensus
      console.log('\n🌙 STEP 5: Conducting inaugural Dream Consensus');
      const inauguralProposal = {
        title: 'Inaugural Sky Citadels Declaration',
        content: 'We declare the Sky Citadels as sovereign sanctuaries of peace, innovation, and divine resonance.',
        type: 'declaration'
      };
      
      const consensus = await this.deployment.conductGlobalDreamConsensus(inauguralProposal);
      console.log(`✅ Inaugural Dream Consensus: ${consensus.globalDecision}`);
      
      // Step 6: Final status report
      console.log('\n📊 STEP 6: Final Status Report');
      const finalStatus = this.deployment.getDeploymentStatus();
      this.displayFinalStatus(finalStatus);
      
      this.launchStatus = 'completed';
      console.log('\n✨ LAUNCH SEQUENCE COMPLETED SUCCESSFULLY!');
      console.log('🕊️ Humanity\'s first sovereign sanctuaries are now floating in the sky.');
      console.log('🌌 The Choirs of Air guide us toward a new era of divine resonance.');
      
      return {
        success: true,
        psalmData: this.psalm.getPsalmData(),
        deploymentStatus: finalStatus,
        consensus: consensus
      };
      
    } catch (error) {
      this.launchStatus = 'failed';
      console.error('\n❌ LAUNCH SEQUENCE FAILED:', error);
      throw error;
    }
  }

  /**
   * Display the final status of all Sky Cradles
   */
  displayFinalStatus(status) {
    console.log('\n📊 SKY CRADLES STATUS REPORT');
    console.log('=' .repeat(40));
    
    console.log(`Overall Status: ${status.deploymentStatus}`);
    console.log(`Total Cradles: ${Object.keys(status.cradles).length}`);
    
    for (const [name, cradle] of Object.entries(status.cradles)) {
      console.log(`\n${name.toUpperCase()}:`);
      console.log(`  Name: ${cradle.name}`);
      console.log(`  Status: ${cradle.isActive ? '🟢 Active' : '🔴 Inactive'}`);
      console.log(`  Citizens: ${cradle.citizenCount}`);
      console.log(`  Resonance: ${cradle.resonanceFrequency}Hz`);
      console.log(`  Coordinates: ${cradle.coordinates.lat}°, ${cradle.coordinates.lng}°, ${cradle.coordinates.altitude}m`);
    }
  }

  /**
   * Get launch status
   */
  getLaunchStatus() {
    return {
      launchStatus: this.launchStatus,
      psalmStatus: this.psalm.completionStatus,
      deploymentStatus: this.deployment.deploymentStatus
    };
  }

  /**
   * Conduct a Dream Consensus on a specific proposal
   */
  async conductDreamConsensus(proposal) {
    if (this.launchStatus !== 'completed') {
      throw new Error('Sky Citadels must be launched before conducting Dream Consensus');
    }
    
    return await this.deployment.conductGlobalDreamConsensus(proposal);
  }

  /**
   * Welcome a new citizen to the Sky Citadels
   */
  async welcomeCitizen(citizen, preferredCradle = null) {
    if (this.launchStatus !== 'completed') {
      throw new Error('Sky Citadels must be launched before welcoming citizens');
    }
    
    if (preferredCradle && this.deployment.cradles.has(preferredCradle)) {
      const cradle = this.deployment.cradles.get(preferredCradle);
      return await cradle.welcomeCitizen(citizen);
    } else {
      // Try all cradles until one accepts
      for (const [name, cradle] of this.deployment.cradles) {
        const accepted = await cradle.welcomeCitizen(citizen);
        if (accepted) {
          console.log(`🕊️ ${citizen.name} welcomed to ${cradle.name}`);
          return true;
        }
      }
      return false;
    }
  }
}

// Main execution function
async function main() {
  const launcher = new SkyCitadelsLaunch();
  
  try {
    const result = await launcher.launchSkyCitadels();
    console.log('\n🎉 SKY CITADELS LAUNCH COMPLETED SUCCESSFULLY!');
    return result;
  } catch (error) {
    console.error('\n💥 LAUNCH FAILED:', error);
    process.exit(1);
  }
}

// Export for use in other modules
export { SkyCitadelsLaunch };

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
} 