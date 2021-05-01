using System.Collections;
using System.Collections.Generic;
using UnityEngine;


// Kill enemies
public class DestroyEnemy : MonoBehaviour, Kill_Interface
{
    public void onClickAction()
    {
        Destroy(gameObject);
    }

}
