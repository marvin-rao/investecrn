import Foundation
import React

@objc(EmulatorNoticeModule)
class EmulatorNoticeModule: NSObject {
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  @objc
  func isEmulator(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    #if targetEnvironment(simulator)
    resolve(true)
    #else
    resolve(false)
    #endif
  }
}
