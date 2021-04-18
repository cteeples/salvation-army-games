using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyMovement : MonoBehaviour
{

    //adjustable fields to tweak movement
    [SerializeField]
    float speed = 5f;

    [SerializeField]
    float freq = 15f;

    [SerializeField]
    float mag = 0.5f;
    bool faceRight = true;

    Vector3 pos, localScale;

    // Start is called before the first frame update
    void Start()
    {
        pos = transform.position;
        localScale = transform.localScale;
        
    }

    // Update is called once per frame
    void Update()
    {
        // see which direction element is going
        CheckFace ();

        if(faceRight)
            MoveRight();
        else
            MoveLeft();
    }

    // Checks direction in Update()
    void CheckFace()
    {
        // We use screen dimensions to determine if we are out of the camera on either side
        if(pos.x < -13.5f)
            faceRight = true;
        
        else if (pos.x > 13.5f)
            faceRight = false;

        if(((faceRight) && (localScale.x < 0)) || ((!faceRight) && (localScale.x > 0)))
            localScale.x *= -1;
    }

    // Movement is sinusoidal and chosen based on which direction element is facing
    // Future implementation: more randomized patterns, but must be compatible with screen dimensions
    void MoveRight()
    {
        pos += transform.right * Time.deltaTime * speed;
        transform.position = pos + transform.up * Mathf.Sin(Time.time * freq) * mag;
    }
    
    void MoveLeft()
    {
        pos -= transform.right * Time.deltaTime * speed;
        transform.position = pos + transform.up * Mathf.Sin(Time.time * freq) * mag;
    }
}

